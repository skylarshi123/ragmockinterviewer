import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/firebase'; // Adjust the import path as needed
import { doc, collection, addDoc } from 'firebase/firestore';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

    const evaluationResult = completion.choices[0].message.content;
    
    // Parse the evaluation result
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

    return NextResponse.json({ 
      message: 'Session ended successfully', 
      successScore, 
      areasForImprovement 
    });
  } catch (error) {
    console.error('Error ending session:', error);
    return NextResponse.json({ error: 'Failed to end session' }, { status: 500 });
  }
}