//populate the user collection
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";


export default function Home() {
    return (
      <h1>User Collection</h1>
    )
  }