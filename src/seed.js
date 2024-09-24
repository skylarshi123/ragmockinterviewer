const { initializeApp } = require('firebase/app');
const { getFirestore, collection, doc, setDoc } = require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// LeetCode problems data
const csstudents = {
  "harry": {
    sports: "basketball"
  },
  "sanjay": {
    sports: "tennis"
  },
  "alan":{
    sports: "badminton"
  }
  // ... other categories ...
};

async function populateFirestore() {
  try {
    for (const [categoryId, categoryData] of Object.entries(leetcodeData)) {
      // Add category document
      const categoryRef = doc(db, 'leetcode_problems', categoryId);
      await setDoc(categoryRef, {
        name: categoryData.name,
        description: categoryData.description
      });

      // Add problems to category
      for (const problem of categoryData.problems) {
        const problemRef = doc(collection(db, 'leetcode_problems', categoryId, 'problems'), problem.problem_id);
        await setDoc(problemRef, problem);
      }
    }

    console.log("Firestore database populated successfully!");
  } catch (error) {
    console.error("Error populating Firestore:", error);
  }
}

// Call the function to populate Firestore
populateFirestore();