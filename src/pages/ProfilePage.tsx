import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, User, Calendar, Clock, Trophy, Target, Heart, Brain, TrendingUp, Award, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  // Mock user data for hackathon MVP
  const userData = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    joinDate: "March 15, 2024",
    totalSessions: 24,
    totalMinutes: 1080,
    currentStreak: 7,
    longestStreak: 12,
    overallProgress: 78,
    mood: "Improving",
    lastSession: "2 hours ago",
    goals: [
      { title: "Reduce Anxiety", progress: 85, target: "Daily practice", status: "on-track" },
      { title: "Better Sleep", progress: 72, target: "8 hours nightly", status: "on-track" },
      { title: "Stress Management", progress: 60, target: "Weekly check-ins", status: "needs-attention" },
      { title: "Mindfulness Practice", progress: 90, target: "10 min daily", status: "achieved" }
    ],
    achievements: [
      { title: "First Session", description: "Completed your first counseling session", date: "Mar 15, 2024", icon: "🎯" },
      { title: "Week Warrior", description: "Maintained 7-day session streak", date: "Apr 2, 2024", icon: "🔥" },
      { title: "Mindful Milestone", description: "Completed 20 sessions", date: "Apr 10, 2024", icon: "🧘" },
      { title: "Progress Pioneer", description: "Achieved 75% overall progress", date: "Apr 15, 2024", icon: "⭐" }
    ],
    recentSessions: [
      { date: "Today, 2:30 PM", topic: "Anxiety Management", duration: "45 min", mood: "Calm" },
      { date: "Yesterday, 7:00 PM", topic: "Daily Reflection", duration: "20 min", mood: "Peaceful" },
      { date: "2 days ago", topic: "Goal Setting", duration: "35 min", mood: "Motivated" },
    ],
    moodHistory: [
      { date: "Week 1", score: 6.2 },
      { date: "Week 2", score: 6.8 },
      { date: "Week 3", score: 7.1 },
      { date: "Week 4", score: 7.5 },
    ]
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
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h1 className="font-semibold">Your Profile</h1>
                  <p className="text-sm text-muted-foreground">Track your mental wellness journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Profile Info */}
          <Card className="lg:col-span-1 shadow-card">
            <CardHeader className="text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                  {userData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{userData.name}</CardTitle>
              <CardDescription>{userData.email}</CardDescription>
              <div className="flex justify-center mt-4">
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Member since {userData.joinDate}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{userData.totalSessions}</div>
                  <div className="text-xs text-muted-foreground">Total Sessions</div>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{Math.floor(userData.totalMinutes / 60)}h</div>
                  <div className="text-xs text-muted-foreground">Time Invested</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Current Streak</span>
                  <Badge variant="outline" className="flex items-center gap-1">
                    🔥 {userData.currentStreak} days
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Current Mood</span>
                  <Badge variant="secondary">{userData.mood}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Last Session</span>
                  <span className="text-sm text-muted-foreground">{userData.lastSession}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress Overview */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Overall Progress */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Overall Progress
                </CardTitle>
                <CardDescription>Your mental wellness journey at a glance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">Mental Wellness Score</span>
                    <span className="text-2xl font-bold text-primary">{userData.overallProgress}%</span>
                  </div>
                  <Progress value={userData.overallProgress} className="h-3" />
                  <p className="text-sm text-muted-foreground">
                    Great progress! You've shown consistent improvement across all areas.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Goals Progress */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Goals Progress
                </CardTitle>
                <CardDescription>Track your personal development goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {userData.goals.map((goal, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h4 className="font-medium">{goal.title}</h4>
                        <p className="text-xs text-muted-foreground">{goal.target}</p>
                      </div>
                      <Badge 
                        variant={goal.status === 'achieved' ? 'default' : goal.status === 'on-track' ? 'secondary' : 'outline'}
                        className={goal.status === 'achieved' ? 'bg-green-500/20 text-green-700' : ''}
                      >
                        {goal.status === 'achieved' ? '✅ Achieved' : 
                         goal.status === 'on-track' ? '🎯 On Track' : '⚠️ Needs Attention'}
                      </Badge>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">{goal.progress}% complete</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Sessions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Recent Sessions
              </CardTitle>
              <CardDescription>Your latest counseling activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {userData.recentSessions.map((session, index) => (
                <div key={index} className="p-3 bg-muted/50 rounded-lg space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-sm">{session.topic}</p>
                      <p className="text-xs text-muted-foreground">{session.date}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {session.duration}
                    </Badge>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Mood: {session.mood}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Achievements
              </CardTitle>
              <CardDescription>Celebrate your mental wellness milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {userData.achievements.map((achievement, index) => (
                  <div key={index} className="p-4 bg-gradient-card rounded-lg border border-border/50">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{achievement.description}</p>
                        <p className="text-xs text-muted-foreground">Earned on {achievement.date}</p>
                      </div>
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="lg:col-span-3">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Continue your mental wellness journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <Button 
                    variant="hero" 
                    className="flex flex-col h-auto py-4"
                    onClick={() => navigate("/session")}
                  >
                    <Brain className="h-6 w-6 mb-2" />
                    <span>Start Session</span>
                  </Button>
                  <Button variant="therapeutic" className="flex flex-col h-auto py-4">
                    <Heart className="h-6 w-6 mb-2" />
                    <span>Mood Check</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col h-auto py-4">
                    <Target className="h-6 w-6 mb-2" />
                    <span>Set Goals</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col h-auto py-4">
                    <Calendar className="h-6 w-6 mb-2" />
                    <span>Schedule</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;