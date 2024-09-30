'use client'

import { useState, useRef, useEffect } from "react"
import { useChat } from 'ai/react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import { sendMessage, concludeInterview } from './actions'

export default function ChatComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  const handleConcludeInterview = async () => {
    const summary = await concludeInterview()
    // Handle the summary, maybe display it or navigate to a summary page
    console.log(summary)
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-xl font-bold">LeetCode Interviewer</h1>
        <Button onClick={handleConcludeInterview}>Conclude Interview</Button>
      </header>
      <ScrollArea className="flex-grow p-4">
        {messages.map((message, index) => (
          <Card key={index} className={`mb-4 ${message.role === 'assistant' ? 'bg-blue-100' : 'bg-green-100'}`}>
            <CardContent className="p-4">
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
            </CardContent>
          </Card>
        ))}
        <div ref={messagesEndRef} />
      </ScrollArea>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-4">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message here..."
            className="flex-grow"
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  )
}