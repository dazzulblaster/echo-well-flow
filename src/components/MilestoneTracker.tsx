import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Calendar, Star, CheckCircle, Clock } from "lucide-react";
import progressImage from "@/assets/progress-illustration.jpg";

const MilestoneTracker = () => {
  const milestones = [
    {
      id: 1,
      title: "First Session Completed",
      description: "Complete your first counseling session",
      progress: 100,
      status: "completed",
      date: "2 days ago",
      icon: CheckCircle,
    },
    {
      id: 2,
      title: "Week Streak",
      description: "Maintain daily check-ins for 7 days",
      progress: 85,
      status: "in-progress",
      date: "In progress",
      icon: Calendar,
    },
    {
      id: 3,
      title: "Anxiety Management",
      description: "Complete anxiety reduction exercises",
      progress: 60,
      status: "in-progress",
      date: "Started yesterday",
      icon: Target,
    },
    {
      id: 4,
      title: "Mindfulness Master",
      description: "Practice mindfulness for 30 days",
      progress: 25,
      status: "in-progress",
      date: "Started 1 week ago",
      icon: Star,
    },
  ];

  return (
    <section id="milestones" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Track Your <span className="text-primary">Progress</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrate your achievements and stay motivated with our milestone tracking system.
            Every step forward is progress worth celebrating.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Progress Overview */}
          <Card className="lg:col-span-1 bg-gradient-card border-0 shadow-card">
            <CardHeader className="text-center">
              <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src={progressImage}
                  alt="Progress illustration"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-2xl">Your Journey</CardTitle>
              <CardDescription>Overall progress summary</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">72%</div>
                <p className="text-sm text-muted-foreground">Overall Progress</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Milestones</span>
                  <Badge variant="secondary">4 Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Completed</span>
                  <Badge variant="outline">1 of 4</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Streak</span>
                  <Badge className="bg-gradient-progress text-white">6 days</Badge>
                </div>
              </div>

              <Button variant="progress" className="w-full">
                <Trophy className="h-4 w-4 mr-2" />
                View Achievements
              </Button>
            </CardContent>
          </Card>

          {/* Milestones List */}
          <div className="lg:col-span-2 space-y-4">
            {milestones.map((milestone) => {
              const Icon = milestone.icon;
              return (
                <Card key={milestone.id} className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${
                          milestone.status === 'completed' 
                            ? 'bg-gradient-progress' 
                            : 'bg-primary-soft'
                        }`}>
                          <Icon className={`h-6 w-6 ${
                            milestone.status === 'completed'
                              ? 'text-white'
                              : 'text-primary'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1">{milestone.title}</h3>
                          <p className="text-muted-foreground mb-3">{milestone.description}</p>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm">
                              <span>Progress</span>
                              <span className="font-medium">{milestone.progress}%</span>
                            </div>
                            <Progress value={milestone.progress} className="h-2" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <Badge variant={milestone.status === 'completed' ? 'default' : 'secondary'}>
                          {milestone.status === 'completed' ? 'Completed' : 'In Progress'}
                        </Badge>
                        <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {milestone.date}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestoneTracker;