import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/firebase";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { CalendarDays, Target, Trophy, Settings } from "lucide-react";
import Link from "next/link";

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

  const userDocRef = doc(db, "users", userId);
  const userDocSnap = await getDoc(userDocRef);
  const userData = userDocSnap.data();
  const suggestedNextProblem = userData?.suggestedNextProblem || [];

  const completedProblemsRef = collection(
    db,
    "users",
    userId,
    "completedProblems"
  );
  const q = query(
    completedProblemsRef,
    orderBy("completedAt", "desc"),
    limit(3)
  );
  const querySnapshot = await getDocs(q);

  const completedProblems: CompletedProblem[] = [];
  querySnapshot.forEach((doc) => {
    completedProblems.push(doc.data() as CompletedProblem);
  });

  const totalProblems = completedProblems.length;
  const averageScore =
    completedProblems.reduce((sum, problem) => sum + problem.successScore, 0) /
      totalProblems || 0;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        Your LeetCode Progress Dashboard
      </h1>

      {totalProblems > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Problems Solved
                </CardTitle>
                <Trophy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalProblems}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Average Score
                </CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {averageScore.toFixed(2)}%
                </div>
                <Progress value={averageScore} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Streak</CardTitle>
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1 days</div>
                <p className="text-xs text-muted-foreground">Keep it up!</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Suggested Next Problem</CardTitle>
            </CardHeader>
            <CardContent>
              {suggestedNextProblem.length === 2 ? (
                <>
                  <p>
                    <strong>Problem Type:</strong> {suggestedNextProblem[0]}
                  </p>
                  <p>
                    <strong>Problem Name:</strong> {suggestedNextProblem[1]}
                  </p>
                  <Link
                    href={`/user/mockinterviewer?type=${suggestedNextProblem[0]}&name=${suggestedNextProblem[1]}`}
                    passHref
                  >
                    <Button className="mt-2">Go to Suggested Problem</Button>
                  </Link>
                </>
              ) : (
                <p>No suggested problem available at the moment.</p>
              )}
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mb-4">
            Recently Completed Problems
          </h2>
          {completedProblems.map((problem, index) => (
            <Card key={index} className="mb-4">
              <CardHeader>
                <CardTitle>{problem.problemName}</CardTitle>
                <CardDescription>{problem.problemType}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <Badge
                    variant="default"
                    className={
                      problem.successScore >= 80
                        ? "bg-green-500 hover:bg-green-600"
                        : ""
                    }
                  >
                    Score: {problem.successScore}%
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Completed on:{" "}
                    {new Date(
                      problem.completedAt.seconds * 1000
                    ).toLocaleDateString()}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Areas for Improvement:</h4>
                  <ul className="list-disc pl-5">
                    {problem.areasForImprovement.map((area, i) => (
                      <li key={i} className="text-sm">
                        {area}
                      </li>
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
        </Alert>
      )}

<div className="mt-6 flex gap-4">
        <Link href="/user/mockinterviewer" passHref legacyBehavior>
          <Button asChild>
            <a>Start New Problem</a>
          </Button>
        </Link>
        <Link href="/user/onboarding" passHref legacyBehavior>
          <Button asChild variant="outline">
            <a>
              <Settings className="w-4 h-4 mr-2" />
              Customize Preferences
            </a>
          </Button>
        </Link>
      </div>
    </div>
  );
}
