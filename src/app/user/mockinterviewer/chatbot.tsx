"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ProblemDetails {
  name: string;
  difficulty: string;
  description: string;
  providedCode: string;
  examples: Record<string, string>;
}

interface ChatbotProps {
  problemDetails: ProblemDetails;
  suggestedProblemType: string;
  suggestedProblemName: string;
}

interface Message {
  role: "assistant" | "user";
  content: string;
}

export default function Chatbot({ problemDetails, suggestedProblemType, suggestedProblemName }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Let's discuss the following LeetCode problem:
        
Name: ${problemDetails.name}
Difficulty: ${problemDetails.difficulty}
Description: ${problemDetails.description}
Provided Code: 
\`\`\`
${problemDetails.providedCode}
\`\`\`
Examples:
${Object.entries(problemDetails.examples).map(([key, value]) => `${key}: ${value}`).join('\n')}

How would you like to approach solving this problem?`,
    }
  ]);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      { role: "user", content: message },
      { role: "assistant", content: "" },
    ]);
    setMessage("");

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([...messages, {role: 'user', content: message}]),
      });

      if (!response.body) throw new Error('No response body');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const text = decoder.decode(value, { stream: true });
        setMessages((prevMessages) => {
          const lastMessage = prevMessages[prevMessages.length - 1];
          const otherMessages = prevMessages.slice(0, prevMessages.length - 1);
          return [
            ...otherMessages,
            {
              ...lastMessage,
              content: lastMessage.content + text,
            },
          ];
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const endSession = async () => {
    const conversation = messages.map(m => `${m.role}: ${m.content}`).join('\n');

    try {
      const response = await fetch('/api/end-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          problemType: suggestedProblemType,
          problemName: suggestedProblemName,
          conversation: conversation
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to end session');
      }

      const result = await response.json();
      console.log('Session ended:', result);
      // Here you can handle the UI update, maybe show a success message or redirect
    } catch (error) {
      console.error('Error ending session:', error);
      // Handle error in UI
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <ScrollArea className="h-[400px] w-full mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.role === 'assistant' ? 'bg-secondary/50' : 'bg-primary/10'} p-3 rounded-lg`}>
              <ReactMarkdown
                components={{
                  code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={atomDark}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    )
                  }
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </ScrollArea>
        <div className="flex gap-2">
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type your message here..."
            className="flex-grow"
          />
          <Button onClick={sendMessage}>Send</Button>
          <Button onClick={endSession} variant="outline">End Session</Button>
        </div>
      </CardContent>
    </Card>
  );
}