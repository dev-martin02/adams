import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail } from "lucide-react";
import cosmicHero from "@/assets/cosmic-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cosmicHero})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background/90" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-cosmic bg-clip-text text-transparent">
            Adam Quinones
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Physics Student & Aspiring Astrophysicist
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Exploring the cosmos through equations and observations. Currently a freshman at university, 
            passionate about unraveling the mysteries of the universe.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <a href="mailto:quinonesa12@montclair.edu" className="text-foreground hover:text-primary transition-colors">

            <Button 
              variant="default" 
              size="lg" 
              className="bg-gradient-cosmic hover:shadow-cosmic transition-all duration-300 animate-pulse-glow"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </a>

        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 text-primary mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;