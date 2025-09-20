import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, MessageCircle, TrendingUp, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-counseling.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your Journey to{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Mental Wellness
                </span>{" "}
                Starts Here
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience personalized AI counseling that adapts to your needs. 
                Track your progress, achieve milestones, and build lasting mental health habits 
                with our compassionate AI assistant.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="animate-glow"
                onClick={() => navigate("/session")}
              >
                Start Your First Session
              </Button>
              <Button variant="therapeutic" size="xl">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="h-4 w-4 text-primary" />
                <span>Evidence-Based</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="Peaceful counseling environment"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Stats Cards */}
            <Card className="absolute top-8 -left-4 p-4 bg-card/95 backdrop-blur-sm shadow-card animate-slide-up">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-soft rounded-lg">
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">92% Success Rate</p>
                  <p className="text-xs text-muted-foreground">In achieving goals</p>
                </div>
              </div>
            </Card>

            <Card className="absolute bottom-8 -right-4 p-4 bg-card/95 backdrop-blur-sm shadow-card animate-slide-up">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary rounded-lg">
                  <MessageCircle className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold">10k+ Sessions</p>
                  <p className="text-xs text-muted-foreground">Completed successfully</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;