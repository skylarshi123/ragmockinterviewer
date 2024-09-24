'use server'
import { Webhook } from "svix";
import { db } from "@/lib/firebase";
import { doc, setDoc} from "firebase/firestore";

const webhookSecret: string = process.env.WEBHOOK_SECRET || "your-secret";

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
    return new Response("Bad Request", { status: 400 });
    console.log(err)
  }
  const userId = msg.data.id
  const name = msg.data.first_name

  try {
    await setDoc(doc(db, "users", userId), {
        name: name
    });
    return new Response('User created successfully', { status: 200 })
  } catch (error) {
    console.error('Error creating user:', error)
    return new Response('Error creating user', { status: 500 })
  }
}