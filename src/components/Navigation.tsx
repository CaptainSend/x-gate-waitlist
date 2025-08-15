import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import wolfLogo from "@/assets/wolf-logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={wolfLogo} 
              alt="BAPT Logo" 
              className="w-8 h-8 animate-float"
            />
            <h1 className="text-xl font-bold gradient-text">BAPT</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="hero" 
              size="sm"
              className="gap-2"
              onClick={() => {
                // This will require Supabase integration for X OAuth
                alert("Please connect to Supabase first to enable X authentication!");
              }}
            >
              <X className="w-4 h-4" />
              Sign up with X
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;