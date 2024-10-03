import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/firebase'; // Adjust the import path as needed
import { doc, getDoc, collection } from 'firebase/firestore';
import Chatbot from './chatbot'; // Adjust the import path as needed

export default async function Description() {
  const { userId } = auth();

  if (!userId) {
    return <div>User not authenticated</div>;
  }

  // Access the user's document in Firebase
  const userDocRef = doc(db, 'users', userId);
  const userDocSnap = await getDoc(userDocRef);

  if (!userDocSnap.exists()) {
    return <div>User data not found</div>;
  }

  const userData = userDocSnap.data();
  const [suggestedProblemType, suggestedProblemName] = userData.suggestedNextProblem || [];

  if (!suggestedProblemType || !suggestedProblemName) {
    return <div>No suggested problem available</div>;
  }

  // Access the leetcode question document
  const leetcodeQuestionRef = doc(db, 'leetcodequestions', suggestedProblemType);
  const problemRef = doc(collection(leetcodeQuestionRef, 'problems'), suggestedProblemName);
  const problemSnap = await getDoc(problemRef);

  if (!problemSnap.exists()) {
    return <div>Problem data not found</div>;
  }

  const problemData = problemSnap.data();

  return (
    <div>
      <h1>User Description</h1>
      <p>User ID: {userId}</p>
      <h2>Suggested Next Problem:</h2>
      <h3>{problemData.name}</h3>
      <p>Difficulty: {problemData.difficulty}</p>
      <h4>Description:</h4>
      <p>{problemData.description}</p>
      <h4>Provided Code:</h4>
      <pre>{problemData.providedCode}</pre>
      <h4>Examples:</h4>
      <ul>
        {Object.entries(problemData.examples || {}).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
      <h4>Your Solution:</h4>
      <Chatbot problemDetails={problemData} />
    </div>
  );
}