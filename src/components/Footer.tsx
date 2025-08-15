import { Button } from "@/components/ui/button";
import { X, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-primary/10 bg-card/30 backdrop-blur-md">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold gradient-text mb-2">BAPT</h3>
            <p className="text-sm text-muted-foreground">
              Transforming ideas into reality. Coming soon.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <X className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary/10 text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 BAPT. All rights reserved. • Beta testing platform
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;