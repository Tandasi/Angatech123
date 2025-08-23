"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Mic, Sparkles, Bot } from "lucide-react"

export function SmartAssistant() {
  const [query, setQuery] = useState("")
  const [isListening, setIsListening] = useState(false)

  const suggestions = [
    "I need a dashboard for my e-commerce business",
    "Compare LookML vs dbt for my data pipeline",
    "Help me choose between GCP and AWS",
    "I want to build a civic engagement platform",
  ]

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion)
  }

  const handleOpenAIAssistant = () => {
    // This will trigger the floating AI assistant
    const aiButton = document.querySelector("[data-ai-assistant-trigger]") as HTMLButtonElement
    if (aiButton) {
      aiButton.click()
    }
  }

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
            <h2 className="font-heading text-3xl font-bold text-foreground">Smart Assistant</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us what you need—our AI assistant will guide you to the perfect solution for your data challenges.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span>How can we help you today?</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Input Area */}
            <div className="flex space-x-2">
              <Input
                placeholder="Describe your data needs, project requirements, or ask about our services..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsListening(!isListening)}
                className={isListening ? "bg-primary text-primary-foreground" : ""}
              >
                <Mic className="h-4 w-4" />
              </Button>
              <Button onClick={handleOpenAIAssistant}>
                <Bot className="h-4 w-4 mr-2" />
                Ask AI
              </Button>
            </div>

            {/* Quick Suggestions */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Popular questions:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {suggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="justify-start text-left h-auto p-3 text-sm"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Bot className="h-5 w-5 text-primary" />
                <span className="font-medium text-primary">AI-Powered Assistance</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Our AI assistant can instantly help you choose the right tools, estimate project costs, and connect you
                with the right team members. Click "Ask AI" or use the floating assistant button.
              </p>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border">
              <span className="text-sm text-muted-foreground">Available in:</span>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  English
                </Button>
                <Button variant="ghost" size="sm">
                  Swahili
                </Button>
                <Button variant="ghost" size="sm">
                  Arabic
                </Button>
                <Button variant="ghost" size="sm">
                  French
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
