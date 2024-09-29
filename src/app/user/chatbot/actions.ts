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
    if (result && result.arrays_and_hashing) {
      console.log('Fetched user preferences and problems:', result);
      
      let arrays_and_hashing = result.arrays_and_hashing;
      console.log('Arrays and Hashing category name:', arrays_and_hashing.name);
      
      console.log('Number of problems in Arrays and Hashing:', arrays_and_hashing.problems.length);
      
      // Process each problem in the category
      arrays_and_hashing.problems.forEach((problem, index) => {
        console.log(`Problem ${index + 1}:`);
        console.log('  Name:', problem.name);
        console.log('  Difficulty:', problem.difficulty);
        console.log('  Description:', problem.description);
        
        // Log examples
        console.log('  Examples:');
        for (let [input, output] of Object.entries(problem.examples)) {
          console.log(`    Input: ${input}`);
          console.log(`    Output: ${output}`);
        }
        
        console.log('  Provided Code:', problem.providedCode);
        console.log('---');
      });
  
      // You can perform additional operations here, such as:
      // 1. Filtering problems by difficulty
      let easyProblems = arrays_and_hashing.problems.filter(p => p.difficulty === 'Easy');
      console.log('Number of Easy problems:', easyProblems.length);
  
      // 2. Finding a specific problem
      let twoSumProblem = arrays_and_hashing.problems.find(p => p.name === 'Two Sum');
      if (twoSumProblem) {
        console.log('Two Sum problem:', twoSumProblem);
      }
  
      // 3. Extracting all problem names
      let problemNames = arrays_and_hashing.problems.map(p => p.name);
      console.log('All problem names:', problemNames);
  
      // 4. Counting problems by difficulty
      let difficultyCount = arrays_and_hashing.problems.reduce((acc, p) => {
        acc[p.difficulty] = (acc[p.difficulty] || 0) + 1;
        return acc;
      }, {});
      console.log('Problems count by difficulty:', difficultyCount);
    } else {
      console.log('Arrays and Hashing category not found in the result');
    }
    return "Processing complete";
  }).catch(error => {
    console.error('Error processing the result:', error);
    return "Error occurred";
  });