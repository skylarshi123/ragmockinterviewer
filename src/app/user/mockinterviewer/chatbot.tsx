"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Chatbot({problemDetails}) {
    const initialMessage = `Let's discuss the following LeetCode problem:
    
    Name: ${problemDetails.name}
    Difficulty: ${problemDetails.difficulty}
    Description: ${problemDetails.description}
    Provided Code: 
    \`\`\`
    ${problemDetails.providedCode}
    \`\`\`
    Examples:
    ${Object.entries(problemDetails.examples).map(([key, value]) => `${key}: ${value}`).join('\n')}
    
    How would you like to approach solving this problem?`;
    
      const [messages, setMessages] = useState([
        {
          role: "assistant",
          content: initialMessage,
        }
      ]);
      const [message, setMessage] = useState("");
      const messagesEndRef = useRef(null);

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

    const response = fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([...messages, {role: 'user', content: message}]),
    }).then(async (res) => {
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      
      let result = ''
      return reader.read().then(function processText({done, value}){
        if (done) {
          return result
        }
        const text = decoder.decode(value || new Uint8Array(), {stream: true})
        setMessages((prevMessages) => {
          let lastMessage = prevMessages[prevMessages.length-1]
          let otherMessages = prevMessages.slice(0, prevMessages.length-1)
          return [
            ...otherMessages,
            {
              ...lastMessage,
              content: lastMessage.content + text,
            },
          ]
        })
        return reader.read().then(processText)
      })
    })
  };

  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <h1>Mock Interviewer Chat Bot</h1>
      </nav>
      <div>
        <div>
          {messages.map((message, index) => (
            <div key={index}>
              <div>
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
          <button onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}