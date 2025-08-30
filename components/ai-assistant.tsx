"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Bot, Send, Sparkles } from "lucide-react"
import { NextResponse } from "next/dist/server/web/spec-extension/response"

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm AngaTech's AI assistant. I can help you choose the right tools, understand our services, or answer questions about data analytics in Africa. What would you like to know?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const quickQuestions = [
    "What's the best stack for my project?",
    "How much does a dashboard cost?",
    "Do you work with startups?",
    "Can you integrate with our existing systems?",
  ]

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return

    const userMessage = { role: "user", content: message }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const res = await fetch("/api/ai-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      })
      const data = await res.json()
      const aiResponse = {
        role: "assistant",
        content: data.content,
      }
      setMessages((prev) => [...prev, aiResponse])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, there was an error getting a response from the AI." },
      ])
    }
    setIsLoading(false)
  }

  return (
    <>
      {/* Floating Assistant Button */}
  <div className="fixed bottom-2 right-2 z-20">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
              data-ai-assistant-trigger
            >
              <Bot className="h-5 w-5 mr-2" />
              Ask me
              <Sparkles className="h-4 w-4 ml-2" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md max-h-[80vh] flex flex-col p-0">
            {/* Box wrapper for all content */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col h-full">
              <DialogHeader>
                <DialogTitle className="font-heading text-xl flex items-center">
                  <Bot className="h-6 w-6 mr-3 text-primary" />
                  AngaTech
                </DialogTitle>
              </DialogHeader>

              <div className="flex-1 flex flex-col space-y-4">
                {/* Messages */}
                <div className="flex-1 space-y-3 max-h-96 overflow-y-auto">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] p-3 rounded-lg text-sm ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-muted p-3 rounded-lg text-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Questions */}
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((question, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-muted text-xs"
                        onClick={() => handleSendMessage(question)}
                      >
                        {question}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="flex space-x-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything about our services..."
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage(input)}
                  />
                  <Button size="sm" onClick={() => handleSendMessage(input)} disabled={isLoading}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}

// Inside your layout or page component
<AIAssistant />

// Removed invalid return statement outside of function body

