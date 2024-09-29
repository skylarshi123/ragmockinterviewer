//function that will update recommended problems
'use server'
import { auth } from '@clerk/nextjs/server';
import {doc, getDoc, collection, getDocs } from 'firebase/firestore';
import {db} from "@/lib/firebase"
// Your Firebase configuration object


export async function fetchUserPreferencesAndProblems() {
    console.log("Hehehe")
  // Get the current user's ID
  const { userId } = auth();

  if (!userId) {
    console.error('No user is currently authenticated');
    return null;
  }

  try {
    // Fetch the user's document
    const userDocRef = doc(db, 'users', userId);
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      console.error('No user document found for the current user');
      return null;
    }

    const userData = userDocSnap.data();
    const userPreferences = userData.preferences || [];

    // Object to store all fetched data
    const preferredCategories = {};

    // Fetch data for each preferred category
    for (const preference of userPreferences) {
      const categoryDocRef = doc(db, 'leetcodequestions', preference);
      const categoryDocSnap = await getDoc(categoryDocRef);

      if (categoryDocSnap.exists()) {
        const categoryData = categoryDocSnap.data();
        const problemsCollectionRef = collection(categoryDocRef, 'problems');
        const problemsQuerySnapshot = await getDocs(problemsCollectionRef);

        const problems = [];
        problemsQuerySnapshot.forEach((doc) => {
          problems.push({ id: doc.id, ...doc.data() });
        });

        preferredCategories[preference] = {
          name: categoryData.name,
          problems: problems
        };
      } else {
        console.warn(`Category ${preference} not found`);
      }
    }

    return preferredCategories;

  } catch (error) {
    console.error('Error fetching user preferences and problems:', error);
    return null;
  }
}

// Usage
fetchUserPreferencesAndProblems().then((result) => {
  if (result) {
    console.log('Fetched user preferences and problems:', result);
    // Process the result as needed
  }
  return "Hi"
});