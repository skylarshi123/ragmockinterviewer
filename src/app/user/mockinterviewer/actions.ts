'use server'

import { auth } from '@clerk/nextjs/server'
import { doc, getDoc, collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from "@/lib/firebase"
import OpenAI from 'openai'

const openai = new OpenAI()

export async function fetchUserPreferencesAndProblems() {
  const { userId } = auth()

  if (!userId) {
    console.error('No user is currently authenticated')
    return null
  }

  try {
    const userDocRef = doc(db, 'users', userId)
    const userDocSnap = await getDoc(userDocRef)

    if (!userDocSnap.exists()) {
      console.error('No user document found for the current user')
      return null
    }

    const userData = userDocSnap.data()
    const suggestedNextProblem = userData.suggestedNextProblem

    if (!suggestedNextProblem || suggestedNextProblem.length !== 2) {
      console.error('Invalid suggestedNextProblem data')
      return null
    }

    const [problemTypeId, problemId] = suggestedNextProblem
    const problemTypeDocRef = doc(db, 'leetcodequestions', problemTypeId)
    const problemDocRef = doc(problemTypeDocRef, 'problems', problemId)
    const problemDocSnap = await getDoc(problemDocRef)

    if (!problemDocSnap.exists()) {
      console.error('Problem document not found')
      return null
    }

    return problemDocSnap.data()
  } catch (error) {
    console.error('Error fetching user preferences and problems:', error)
    return null
  }
}

export async function sendMessage(messages) {
  const problemData = await fetchUserPreferencesAndProblems()
  
  if (!problemData) {
    return "I'm sorry, but I couldn't fetch the problem data. Can you please try again later?"
  }

  const systemPrompt = `You are an AI-powered technical interviewer specializing in LeetCode-style coding questions. Your task is to conduct an interview based on the following problem:

Problem Name: ${problemData.name}
Difficulty: ${problemData.difficulty}
Description: ${problemData.description}

Your role is to:
1. Introduce the problem to the candidate.
2. Ask probing questions to understand their thought process.
3. Provide hints or clarifications if they struggle, but avoid giving away the solution.
4. Evaluate their solution and offer constructive feedback.
5. Discuss time and space complexity of the solution.
6. Explore potential optimizations or alternative approaches.

Maintain a professional, encouraging, and patient demeanor. Challenge the candidate to think critically, but be supportive. Adjust the difficulty of your hints based on the candidate's performance. Remember, your goal is to create a realistic and educational interview experience.`

  const completion = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [
      { role: "system", content: systemPrompt },
      ...messages,
    ],
  })

  return completion.choices[0].message.content
}

export async function concludeInterview() {
  const { userId } = auth()
  if (!userId) {
    console.error('No user is currently authenticated')
    return null
  }

  const problemData = await fetchUserPreferencesAndProblems()
  if (!problemData) {
    console.error('Could not fetch problem data')
    return null
  }

  const summaryPrompt = `Based on the interview for the following LeetCode problem:

Problem Name: ${problemData.name}
Difficulty: ${problemData.difficulty}
Description: ${problemData.description}

Please provide:
1. A short description of the problem (50 words max)
2. The main algorithm and key tips (in bullet points)
3. Areas for improvement for the candidate (in bullet points)
4. A success rate for the candidate's performance (0-100, where 0 is worst and 100 is best)

Format your response as a JSON object with keys: shortDescription, mainAlgorithm, areasForImprovement, and successRate.`

  const completion = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [
      { role: "user", content: summaryPrompt },
    ],
  })

  const summaryResponse = JSON.parse(completion.choices[0].message.content)

  const sessionSummary = {
    leetCodeQuestionName: problemData.name,
    shortDescription: summaryResponse.shortDescription,
    mainAlgorithm: summaryResponse.mainAlgorithm,
    problemType: problemData.category || "Unknown",
    areasForImprovement: summaryResponse.areasForImprovement,
    successRate: summaryResponse.successRate
  }

  const userDocRef = doc(db, 'users', userId)
  const sessionSummariesCollectionRef = collection(userDocRef, 'sessionSummaries')
  await addDoc(sessionSummariesCollectionRef, sessionSummary)

  return sessionSummary
}