import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Send, Heart, Brain, Smile } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const SessionPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI counseling assistant. I'm here to listen and support you through whatever you're experiencing. How are you feeling today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "I hear you. It's completely normal to feel that way. Can you tell me more about what's been on your mind lately?",
        "Thank you for sharing that with me. It takes courage to open up. What would you like to focus on in our session today?",
        "I understand. Sometimes just talking about our feelings can help us process them better. What support do you feel you need right now?",
        "That sounds challenging. Remember, you're not alone in this. What strategies have you tried before that helped you feel better?",
      ];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-soft rounded-lg">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h1 className="font-semibold">AI Counseling Session</h1>
                  <p className="text-sm text-muted-foreground">Your safe space for growth</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Session Active</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Chat Interface */}
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          
          {/* Chat Area */}
          <Card className="lg:col-span-3 flex flex-col bg-card/50 backdrop-blur-sm">
            {/* Messages */}
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-4 ${message.isUser ? "flex-row-reverse" : ""}`}
                  >
                    <Avatar className="h-10 w-10 flex-shrink-0">
                      <AvatarFallback className={message.isUser ? "bg-primary text-primary-foreground" : "bg-secondary"}>
                        {message.isUser ? "You" : "AI"}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`flex-1 ${message.isUser ? "text-right" : ""}`}>
                      <div
                        className={`inline-block max-w-[80%] p-4 rounded-2xl ${
                          message.isUser
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary/50 text-secondary-foreground"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Share what's on your mind..."
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} disabled={!inputMessage.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Press Enter to send • This is a safe, confidential space
              </p>
            </div>
          </Card>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Session Info */}
            <Card className="p-4 bg-card/50 backdrop-blur-sm">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary" />
                Session Tools
              </h3>
              <div className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Smile className="h-4 w-4 mr-2" />
                  Mood Check
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Brain className="h-4 w-4 mr-2" />
                  Breathing Exercise
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Heart className="h-4 w-4 mr-2" />
                  Gratitude Practice
                </Button>
              </div>
            </Card>

            {/* Quick Responses */}
            <Card className="p-4 bg-card/50 backdrop-blur-sm">
              <h3 className="font-semibold mb-3">Quick Responses</h3>
              <div className="space-y-2">
                {[
                  "I'm feeling anxious",
                  "I need motivation",
                  "I'm feeling overwhelmed",
                  "I want to set goals"
                ].map((response) => (
                  <Button
                    key={response}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-xs h-auto py-2"
                    onClick={() => setInputMessage(response)}
                  >
                    {response}
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SessionPage;