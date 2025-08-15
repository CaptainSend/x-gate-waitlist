import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Got an <span className="gradient-text">Idea</span>?
            <br />
            <span className="gradient-text">BAPT</span> it.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Join the exclusive beta of the next generation platform for turning ideas into reality.
            <br />
            <span className="text-primary">Limited access. Invitation only.</span>
          </p>

          <Card className="max-w-md mx-auto p-6 bg-card/50 backdrop-blur-md border-primary/20 animate-slide-up">
            <h3 className="text-xl font-semibold mb-4">Request Beta Access</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Connect with your X account to join the waitlist. Our team will review your application and notify you when access is granted.
            </p>
            
            <Button 
              variant="hero" 
              size="xl" 
              className="w-full gap-3"
              onClick={() => {
                // This will require Supabase integration for X OAuth
                alert("Please connect to Supabase first to enable X authentication!");
              }}
            >
              <X className="w-5 h-5" />
              Sign up with X
            </Button>
            
            <p className="text-xs text-muted-foreground mt-4">
              By signing up, you agree to our terms and privacy policy.
              <br />
              <span className="text-primary">Admin approval required for access.</span>
            </p>
          </Card>

          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Beta testing now live
            </div>
            
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span>🚀 Early access features</span>
              <span>💡 Shape the future</span>
              <span>👥 Exclusive community</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-2 h-2 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;