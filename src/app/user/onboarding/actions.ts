'use server'

import { db } from "@/lib/firebase";
import { doc, updateDoc } from "firebase/firestore";

export async function updatePreferences(userId: string, preferences: string[]): Promise<{ success: boolean; error?: string }> {
  try {
    const userDocRef = doc(db, "users", userId);
    await updateDoc(userDocRef, {
      preferences: preferences
    });
    return { success: true };
  } catch (error: unknown) {
    console.error("Error updating preferences:", error);
    if (error instanceof Error) {
      return { success: false, error: error.message };
    } else {
      return { success: false, error: "An unknown error occurred" };
    }
  }
}