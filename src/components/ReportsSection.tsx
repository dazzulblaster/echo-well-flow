import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, Calendar, Download, Heart, Brain, Smile, Clock, Target } from "lucide-react";

const ReportsSection = () => {
  const weeklyData = [
    { day: "Mon", mood: 7, sessions: 1, duration: 45 },
    { day: "Tue", mood: 6, sessions: 0, duration: 0 },
    { day: "Wed", mood: 8, sessions: 1, duration: 30 },
    { day: "Thu", mood: 7, sessions: 1, duration: 60 },
    { day: "Fri", mood: 9, sessions: 1, duration: 20 },
    { day: "Sat", mood: 8, sessions: 0, duration: 0 },
    { day: "Sun", mood: 8, sessions: 1, duration: 40 },
  ];

  return (
    <section id="reports" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Your Progress <span className="text-primary">Reports</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gain insights into your mental health journey with detailed analytics and personalized reports.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-1/2 mx-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="mood">Mood</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="grid lg:grid-cols-3 gap-6">
            {/* Key Metrics */}
            <Card className="shadow-card">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  This Week
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-primary-soft rounded-lg">
                    <div className="text-2xl font-bold text-primary">5</div>
                    <div className="text-xs text-muted-foreground">Sessions</div>
                  </div>
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <div className="text-2xl font-bold text-secondary-foreground">195</div>
                    <div className="text-xs text-muted-foreground">Minutes</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Average Mood</span>
                    <Badge variant="outline">7.6/10</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Consistency</span>
                    <Badge className="bg-gradient-progress text-white">85%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mood Trend */}
            <Card className="shadow-card">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Mood Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between h-32 gap-2">
                  {weeklyData.map((day, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div 
                        className="bg-gradient-progress rounded-t w-6"
                        style={{ height: `${(day.mood / 10) * 100}%` }}
                      />
                      <span className="text-xs text-muted-foreground">{day.day}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  Export Reports
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="therapeutic" className="w-full">
                  Download PDF Report
                </Button>
                <Button variant="outline" className="w-full">
                  Email Summary
                </Button>
                <Button variant="ghost" className="w-full">
                  Share Progress
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mood" className="grid lg:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smile className="h-5 w-5 text-primary" />
                  Mood Patterns
                </CardTitle>
                <CardDescription>Weekly mood tracking analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyData.map((day, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">{day.day}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-border rounded-full h-2">
                          <div 
                            className="bg-gradient-progress h-2 rounded-full"
                            style={{ width: `${(day.mood / 10) * 100}%` }}
                          />
                        </div>
                        <Badge variant="outline">{day.mood}/10</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Mood Insights</CardTitle>
                <CardDescription>AI-generated observations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-card rounded-lg">
                  <h4 className="font-semibold mb-2">Positive Trend</h4>
                  <p className="text-sm text-muted-foreground">
                    Your mood has improved by 23% this week compared to last week. 
                    Friday sessions seem particularly effective.
                  </p>
                </div>
                <div className="p-4 bg-primary-soft rounded-lg">
                  <h4 className="font-semibold mb-2">Recommendation</h4>
                  <p className="text-sm text-muted-foreground">
                    Consider scheduling sessions on Tuesday to maintain consistency 
                    and prevent mid-week mood dips.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Session Analytics
                </CardTitle>
                <CardDescription>Detailed breakdown of your counseling activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gradient-card rounded-lg">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">18</div>
                    <div className="text-sm text-muted-foreground">Total Sessions</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-card rounded-lg">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">12.5h</div>
                    <div className="text-sm text-muted-foreground">Total Time</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-card rounded-lg">
                    <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">42min</div>
                    <div className="text-sm text-muted-foreground">Avg Duration</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="grid lg:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>AI Insights</CardTitle>
                <CardDescription>Personalized observations from your AI counselor</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border-l-4 border-primary bg-primary-soft">
                  <h4 className="font-semibold mb-1">Growth Area</h4>
                  <p className="text-sm">You've shown remarkable progress in anxiety management techniques.</p>
                </div>
                <div className="p-4 border-l-4 border-secondary bg-secondary">
                  <h4 className="font-semibold mb-1">Strength</h4>
                  <p className="text-sm">Your consistency in daily check-ins demonstrates strong commitment.</p>
                </div>
                <div className="p-4 border-l-4 border-accent bg-accent">
                  <h4 className="font-semibold mb-1">Focus Area</h4>
                  <p className="text-sm">Consider exploring mindfulness exercises to enhance emotional regulation.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
                <CardDescription>Suggested next steps for your journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="therapeutic" className="w-full justify-start">
                  <Target className="h-4 w-4 mr-2" />
                  Set new milestone: 30-day meditation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule weekly progress review
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Heart className="h-4 w-4 mr-2" />
                  Explore gratitude journaling
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ReportsSection;