'use server'

import { Webhook } from "svix";
import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";

const webhookSecret: string = process.env.WEBHOOK_SECRET || "your-secret";

const defaultPreferences = [
  "Arrays & Hashing", "Two Pointers", "Stack", "Binary Search", "Sliding Window",
  "Linked List", "Trees", "Tries", "Backtracking", "Heap / Priority Queue",
  "Graphs", "1-D DP", "Intervals", "Greedy", "Advanced Graphs", "2-D DP",
  "Bit Manipulation", "Math & Geometry"
];

export async function POST(req: Request) {
  const svix_id = req.headers.get("svix-id") ?? "";
  const svix_timestamp = req.headers.get("svix-timestamp") ?? "";
  const svix_signature = req.headers.get("svix-signature") ?? "";
  const body = await req.text();

  const sivx = new Webhook(webhookSecret);
  let msg;

  try {
    msg = sivx.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
    console.log(msg.data)
  } catch (err) {
    console.log(err)
    return new Response("Bad Request", { status: 400 });
  }

  const userId = msg.data.id

  try {
    await setDoc(doc(db, "users", userId), {
      preferences: defaultPreferences,
      completed_problems: [],
      flashcards: [],
      sessionSummaries: [],
      successRate: 50
    });
    return new Response('User created successfully', { status: 200 })
  } catch (error) {
    console.error('Error creating user:', error)
    return new Response('Error creating user', { status: 500 })
  }
}