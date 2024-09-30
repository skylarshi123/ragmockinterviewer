import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { EditPreferences } from "./edit";
import { auth } from '@clerk/nextjs/server';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function getUserPreferences(userId: string) {
  const userDocRef = doc(db, "users", userId);
  const userDoc = await getDoc(userDocRef);
  if (userDoc.exists()) {
    return userDoc.data().preferences || [];
  }
  return [];
}

export default async function Home() {
  const { userId } = auth();
  
  if (!userId) {
    return (
      <Card className="max-w-md mx-auto mt-8">
        <CardHeader>
          <CardTitle>Authentication Required</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">Please log in to view your preferences.</p>
        </CardContent>
      </Card>
    );
  }

  const userPreferences = await getUserPreferences(userId);

  return (
    <Card className="max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">User Preferences</CardTitle>
      </CardHeader>
      <CardContent>
        <EditPreferences initialPreferences={userPreferences} userId={userId} />
      </CardContent>
    </Card>
  )
}