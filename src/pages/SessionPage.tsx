import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Mic, MicOff, Heart, Brain, Smile, Volume2, VolumeX, Play, Pause } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface VoiceMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  duration?: number;
  isPlaying?: boolean;
}

const SessionPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<VoiceMessage[]>([
    {
      id: "1",
      content: "Hello! I'm your AI counseling assistant. I'm here to listen and support you through whatever you're experiencing. How are you feeling today?",
      isUser: false,
      timestamp: new Date(),
      duration: 8,
    },
  ]);
  const [isRecording, setIsRecording] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [currentTranscript, setCurrentTranscript] = useState("");
  const [isMuted, setIsMuted] = useState(false);
  const [isAISpeaking, setIsAISpeaking] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleStartRecording = () => {
    setIsRecording(true);
    setIsListening(true);
    setCurrentTranscript("Listening...");
    
    // Simulate voice recognition
    setTimeout(() => {
      const mockTranscripts = [
        "I've been feeling really anxious lately",
        "I'm having trouble sleeping and concentrating",
        "I feel overwhelmed with work and personal life",
        "I need help managing my stress levels"
      ];
      
      const transcript = mockTranscripts[Math.floor(Math.random() * mockTranscripts.length)];
      setCurrentTranscript(transcript);
      setIsListening(false);
    }, 2000);
  };

  const handleStopRecording = () => {
    if (!currentTranscript || currentTranscript === "Listening...") return;
    
    setIsRecording(false);
    
    const userMessage: VoiceMessage = {
      id: Date.now().toString(),
      content: currentTranscript,
      isUser: true,
      timestamp: new Date(),
      duration: Math.floor(Math.random() * 10) + 3,
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentTranscript("");

    // Simulate AI response
    setTimeout(() => {
      setIsAISpeaking(true);
      const aiResponses = [
        "I hear you, and I want you to know that what you're feeling is valid. Anxiety can be overwhelming, but there are ways we can work through this together. Can you tell me when you first noticed these feelings?",
        "Sleep difficulties often go hand in hand with stress and anxiety. You're taking the right step by reaching out. Let's explore what might be contributing to these challenges and find some strategies that could help.",
        "Feeling overwhelmed is more common than you might think, especially when juggling multiple responsibilities. It takes strength to recognize when you need support. What aspects of your daily routine feel most challenging right now?",
        "Stress management is a skill we can definitely work on together. Everyone responds differently to stress, so let's find personalized techniques that work for you. What have you tried before, and how did it make you feel?"
      ];

      const aiMessage: VoiceMessage = {
        id: (Date.now() + 1).toString(),
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        isUser: false,
        timestamp: new Date(),
        duration: Math.floor(Math.random() * 15) + 8,
      };

      setMessages((prev) => [...prev, aiMessage]);
      
      // Simulate AI speech duration
      setTimeout(() => {
        setIsAISpeaking(false);
      }, aiMessage.duration! * 1000);
    }, 1500);
  };

  const playMessage = (messageId: string) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, isPlaying: !msg.isPlaying } : { ...msg, isPlaying: false }
    ));
    
    // Simulate audio playback
    const message = messages.find(m => m.id === messageId);
    if (message && !message.isPlaying) {
      setTimeout(() => {
        setMessages(prev => prev.map(msg => 
          msg.id === messageId ? { ...msg, isPlaying: false } : msg
        ));
      }, (message.duration || 5) * 1000);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
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
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMute}
                className="flex items-center gap-2"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                {isMuted ? "Unmute" : "Mute"}
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className={`h-2 w-2 rounded-full ${isAISpeaking ? 'bg-blue-500 animate-pulse' : isRecording ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
                <span>{isAISpeaking ? "AI Speaking" : isRecording ? "Recording" : "Ready"}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Chat Interface */}
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          
          {/* Voice Chat Area */}
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
                        className={`inline-block max-w-[80%] p-4 rounded-2xl relative ${
                          message.isUser
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary/50 text-secondary-foreground"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-1">
                            <p className="text-sm leading-relaxed">{message.content}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => playMessage(message.id)}
                                className="h-6 w-6 p-0"
                              >
                                {message.isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                              </Button>
                              <span className="text-xs opacity-70">{message.duration}s</span>
                              {message.isPlaying && (
                                <div className="flex items-center gap-1">
                                  <div className="w-1 h-3 bg-current animate-pulse"></div>
                                  <div className="w-1 h-4 bg-current animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                                  <div className="w-1 h-2 bg-current animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                  <div className="w-1 h-4 bg-current animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Voice Input Area */}
            <div className="border-t border-border p-6">
              <div className="flex flex-col items-center gap-4">
                {/* Current Transcript */}
                {isRecording && (
                  <div className="w-full p-3 bg-muted/50 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">
                      {isListening ? "🎤 Listening..." : `"${currentTranscript}"`}
                    </p>
                  </div>
                )}
                
                {/* Voice Controls */}
                <div className="flex items-center gap-4">
                  <Button
                    variant={isRecording ? "destructive" : "hero"}
                    size="lg"
                    onClick={isRecording ? handleStopRecording : handleStartRecording}
                    disabled={isAISpeaking}
                    className="h-16 w-16 rounded-full"
                  >
                    {isRecording ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground text-center max-w-md">
                  {isRecording 
                    ? "Tap the microphone again when you're finished speaking" 
                    : isAISpeaking 
                    ? "AI is responding... Please wait"
                    : "Tap the microphone to start speaking • This is a safe, confidential space"
                  }
                </p>
              </div>
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
                    onClick={() => setCurrentTranscript(response)}
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