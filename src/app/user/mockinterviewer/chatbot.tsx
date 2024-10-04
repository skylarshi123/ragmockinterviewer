"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
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
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message here..."
        />
        <button onClick={sendMessage}>Send</button>
        <button onClick={endSession}>End Session</button>
      </div>
    </div>
  );
}