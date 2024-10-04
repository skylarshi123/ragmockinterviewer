import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CalendarDays, Target, Trophy } from "lucide-react";
import Link from 'next/link';

interface CompletedProblem {
  problemName: string;
  problemType: string;
  successScore: number;
  areasForImprovement: string[];
  completedAt: { seconds: number; nanoseconds: number };
}

export default async function UserDashboard() {
  const { userId } = auth();

  if (!userId) {
    return <div>User not authenticated</div>;
  }

  const userDocRef = collection(db, 'users', userId, 'completedProblems');
  const q = query(userDocRef, orderBy('completedAt', 'desc'), limit(3));
  const querySnapshot = await getDocs(q);

  const completedProblems: CompletedProblem[] = [];
  querySnapshot.forEach((doc) => {
    completedProblems.push(doc.data() as CompletedProblem);
  });

  const totalProblems = completedProblems.length;
  const averageScore = completedProblems.reduce((sum, problem) => sum + problem.successScore, 0) / totalProblems || 0;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your LeetCode Progress Dashboard</h1>
      
      {totalProblems > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Problems Solved</CardTitle>
                <Trophy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalProblems}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{averageScore.toFixed(2)}%</div>
                <Progress value={averageScore} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Streak</CardTitle>
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3 days</div>
                <p className="text-xs text-muted-foreground">Keep it up!</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Recently Completed Problems</h2>
          {completedProblems.map((problem, index) => (
            <Card key={index} className="mb-4">
              <CardHeader>
                <CardTitle>{problem.problemName}</CardTitle>
                <CardDescription>{problem.problemType}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant={problem.successScore >= 80 ? "success" : "default"}>
                    Score: {problem.successScore}%
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Completed on: {new Date(problem.completedAt.seconds * 1000).toLocaleDateString()}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Areas for Improvement:</h4>
                  <ul className="list-disc pl-5">
                    {problem.areasForImprovement.map((area, i) => (
                      <li key={i} className="text-sm">{area}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </>
      ) : (
        <Alert>
          <AlertTitle>Welcome to your LeetCode journey!</AlertTitle>
          <AlertDescription>
            You haven't completed any problems yet. Start solving to see your progress here!
          </AlertDescription>
        </Alert>
      )}
      
      <div className="mt-6">
        <Link href="/user/mockinterviewer" passHref>
          <Button as="a">Start New Problem</Button>
        </Link>
      </div>
    </div>
  );
}