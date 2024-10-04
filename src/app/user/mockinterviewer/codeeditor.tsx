"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface CodeEditorProps {
  initialCode: string;
  onCodeChange: (code: string) => void;
}

export default function CodeEditor({ initialCode, onCodeChange }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = event.target.value;
    setCode(newCode);
    onCodeChange(newCode);
  };

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Code Editor</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={code}
          onChange={handleCodeChange}
          className="w-full h-[400px] font-mono text-sm"
          placeholder="Write your code here..."
        />
        <div className="mt-4 flex justify-end">
          <Button onClick={() => onCodeChange(code)}>Update Code</Button>
        </div>
      </CardContent>
    </Card>
  );
}