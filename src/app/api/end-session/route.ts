import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/firebase';
import { doc, collection, addDoc, getDocs, getDoc, updateDoc } from 'firebase/firestore';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getNextSuggestedProblem(userId: string) {
  const userDocRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userDocRef);
  const userData = userDoc.data();

  if (!userData) {
    throw new Error('User data not found');
  }

  const userPreferences = userData.preferences || [];
  const completedProblemsRef = collection(userDocRef, 'completedProblems');
  const completedProblemsSnap = await getDocs(completedProblemsRef);
  const completedProblems = completedProblemsSnap.docs.map(doc => doc.data());

  const problemScores: { [key: string]: { [key: string]: number } } = {};
  
  // Get all problems from user's preferred categories
  for (const preference of userPreferences) {
    const leetcodeQuestionsRef = doc(db, 'leetcodequestions', preference);
    const problemsRef = collection(leetcodeQuestionsRef, 'problems');
    const problemsSnap = await getDocs(problemsRef);
    
    problemsSnap.forEach(problemDoc => {
      if (!problemScores[preference]) {
        problemScores[preference] = {};
      }
      problemScores[preference][problemDoc.id] = 100; // Initial score
    });
  }

  // Adjust scores based on completed problems
  completedProblems.forEach(problem => {
    if (problemScores[problem.problemType] && problemScores[problem.problemType][problem.problemName]) {
      problemScores[problem.problemType][problem.problemName] -= 30;
    }
  });

  // Calculate average success score
  const averageSuccessScore = completedProblems.reduce((sum, problem) => sum + problem.successScore, 0) / completedProblems.length || 0;

  // Adjust scores based on difficulty
  for (const preference in problemScores) {
    const leetcodeQuestionsRef = doc(db, 'leetcodequestions', preference);
    const problemsRef = collection(leetcodeQuestionsRef, 'problems');
    const problemsSnap = await getDocs(problemsRef);
    
    problemsSnap.forEach(problemDoc => {
      const problemData = problemDoc.data();
      if (averageSuccessScore < 50 && problemData.difficulty === 'hard') {
        problemScores[preference][problemDoc.id] -= 20;
      } else if (averageSuccessScore > 50 && problemData.difficulty === 'easy') {
        problemScores[preference][problemDoc.id] -= 20;
      }
    });
  }

  // Find problem with highest score
  let highestScore = -1;
  let suggestedProblem: [string, string] | null = null;

  for (const preference in problemScores) {
    for (const problemId in problemScores[preference]) {
      if (problemScores[preference][problemId] > highestScore) {
        highestScore = problemScores[preference][problemId];
        suggestedProblem = [preference, problemId];
      }
    }
  }

  if (!suggestedProblem) {
    throw new Error('No suitable problem found');
  }

  return suggestedProblem;
}

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const data = await req.json();
  const { problemType, problemName, conversation } = data;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an AI that evaluates coding interviews. Provide a success score from 0-100 and three areas for improvement. Format your response exactly as follows: 'Score: [0-100]\nTip 1: [First tip]\nTip 2: [Second tip]\nTip 3: [Third tip]'"
        },
        {
          role: "user",
          content: `Evaluate this coding interview: ${conversation}`
        }
      ],
    });

    const evaluationResult = completion.choices[0]?.message?.content;
    
    // Parse the evaluation result
    if (!evaluationResult) {
      throw new Error('No evaluation result received from OpenAI');
    }
    const [scoreString, ...tips] = evaluationResult.split('\n');
    const successScore = parseInt(scoreString.split(': ')[1]);
    const areasForImprovement = tips.map(tip => tip.split(': ')[1]);

    if (isNaN(successScore) || areasForImprovement.length !== 3) {
      throw new Error('Failed to parse OpenAI response');
    }

    // Store the result in Firestore
    const userDocRef = doc(db, 'users', userId);
    const completedProblemsRef = collection(userDocRef, 'completedProblems');
    await addDoc(completedProblemsRef, {
      problemType,
      problemName,
      successScore,
      areasForImprovement,
      completedAt: new Date()
    });

    // Get next suggested problem
    const [suggestedProblemType, suggestedProblemName] = await getNextSuggestedProblem(userId);

    // Update user document with new suggested problem
    await updateDoc(userDocRef, {
      suggestedNextProblem: [suggestedProblemType, suggestedProblemName]
    });

    return NextResponse.json({
      message: 'Session ended successfully',
      successScore,
      areasForImprovement,
      suggestedNextProblem: [suggestedProblemType, suggestedProblemName]
    });
  } catch (error) {
    console.error('Error ending session:', error);
    return NextResponse.json({ error: 'Failed to end session' }, { status: 500 });
  }
}