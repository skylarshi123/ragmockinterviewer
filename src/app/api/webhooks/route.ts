'use server'

import { Webhook, WebhookRequiredHeaders, WebhookVerificationError } from "svix";
import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";

const webhookSecret: string = process.env.WEBHOOK_SECRET || "your-secret";

const defaultPreferences = [
  "arrays_and_hashing", "two_pointers", "stack", "binary_search", "sliding_window",
  "linked_list", "trees", "tries", "backtracking", "heap_priority_queue",
  "graphs", "1d_dynamic_programming", "intervals", "greedy", "advanced_graphs", "2d_dynamic_programming",
  "bit_manipulation", "math_and_geometry"
];

// Define an interface for the webhook payload
interface WebhookPayload {
  data: {
    id: string;
    // Add other properties as needed
  };
  // Add other top-level properties if necessary
}

export async function POST(req: Request) {
  const svix_id = req.headers.get("svix-id") ?? "";
  const svix_timestamp = req.headers.get("svix-timestamp") ?? "";
  const svix_signature = req.headers.get("svix-signature") ?? "";
  const body = await req.text();

  const svix = new Webhook(webhookSecret);
  let msg: WebhookPayload;

  const svixHeaders: WebhookRequiredHeaders = {
    "svix-id": svix_id,
    "svix-timestamp": svix_timestamp,
    "svix-signature": svix_signature,
  };

  try {
    msg = svix.verify(body, svixHeaders) as WebhookPayload;
    console.log(msg.data);
  } catch (err) {
    console.log(err);
    if (err instanceof WebhookVerificationError) {
      return new Response(`Webhook verification failed: ${err.message}`, { status: 400 });
    }
    return new Response("Bad Request", { status: 400 });
  }

  const userId = msg.data.id;

  try {
    await setDoc(doc(db, "users", userId), {
      preferences: defaultPreferences,
      completed_problems: [],
      flashcards: [],
      suggestedNextProblem: ["arrays_and_hashing", "two_sum"],
      successRate: 50
    });

    return new Response('User created successfully', { status: 200 });
  } catch (error) {
    console.error('Error creating user:', error);
    return new Response('Error creating user', { status: 500 });
  }
}