import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <main className="text-center">
        <h1 className="text-5xl font-bold text-white mb-8">
          Crack the Technical Interview!
        </h1>
        <p className="text-xl text-white mb-8">
          Prepare for your next tech interview with our mock interviewer app.
        </p>
        <Link href="/user/dashboard" passHref>
          <Button className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Start Practicing
          </Button>
        </Link>
      </main>
    </div>
  )
}