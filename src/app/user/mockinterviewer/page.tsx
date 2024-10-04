import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/firebase'; // Adjust the import path as needed
import { doc, getDoc, collection } from 'firebase/firestore';
import Chatbot from './chatbot'; // Adjust the import path as needed
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ScrollArea } from "@/components/ui/scroll-area"

export default async function Description() {
  const { userId } = auth();

  if (!userId) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Authentication Error</AlertTitle>
        <AlertDescription>User not authenticated. Please sign in to continue.</AlertDescription>
      </Alert>
    );
  }

  // Access the user's document in Firebase
  const userDocRef = doc(db, 'users', userId);
  const userDocSnap = await getDoc(userDocRef);

  if (!userDocSnap.exists()) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Data Error</AlertTitle>
        <AlertDescription>User data not found. Please try again later.</AlertDescription>
      </Alert>
    );
  }

  const userData = userDocSnap.data();
  const [suggestedProblemType, suggestedProblemName] = userData.suggestedNextProblem || [];

  if (!suggestedProblemType || !suggestedProblemName) {
    return (
      <Alert>
        <AlertTitle>No Problem Available</AlertTitle>
        <AlertDescription>No suggested problem available at the moment. Check back later!</AlertDescription>
      </Alert>
    );
  }

  // Access the leetcode question document
  const leetcodeQuestionRef = doc(db, 'leetcodequestions', suggestedProblemType);
  const problemRef = doc(collection(leetcodeQuestionRef, 'problems'), suggestedProblemName);
  const problemSnap = await getDoc(problemRef);

  if (!problemSnap.exists()) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Data Error</AlertTitle>
        <AlertDescription>Problem data not found. Please try again later.</AlertDescription>
      </Alert>
    );
  }

  const problemData = problemSnap.data();

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>User Description</CardTitle>
          <CardDescription>User ID: {userId}</CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {problemData.name}
            <Badge variant={problemData.difficulty === 'Easy' ? 'secondary' : problemData.difficulty === 'Medium' ? 'default' : 'destructive'}>
              {problemData.difficulty}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="description">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>
                <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                  {problemData.description}
                </ScrollArea>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="provided-code">
              <AccordionTrigger>Provided Code</AccordionTrigger>
              <AccordionContent>
                <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                  <pre>{problemData.providedCode}</pre>
                </ScrollArea>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="examples">
              <AccordionTrigger>Examples</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-4">
                  {Object.entries(problemData.examples || {}).map(([key, value]) => (
                    <li key={key} className="mb-2">
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter>
          <div className="w-full">
            <h4 className="text-lg font-semibold mb-2">Your Solution:</h4>
            <Chatbot
              problemDetails={problemData}
              suggestedProblemType={suggestedProblemType}
              suggestedProblemName={suggestedProblemName}
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}