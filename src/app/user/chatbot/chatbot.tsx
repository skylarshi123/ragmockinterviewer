'use client'
import {fetchUserPreferencesAndProblems} from "./actions"
export default function ButtonThing(){
    const handleFetch = async () => {
        const result = await fetchUserPreferencesAndProblems()
        console.log(result)
    }
    return (
        <button onClick={handleFetch}>
        Fetch User Preferences and Problems
        </button>
    )
}