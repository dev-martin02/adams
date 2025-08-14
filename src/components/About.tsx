import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Telescope, Atom, BookOpen, Users } from "lucide-react";

const About = () => {
  const interests = [
    "Quantum Mechanics", "Astrophysics", "Cosmology", "Particle Physics",
    "Stellar Evolution", "Dark Matter", "Relativity", "Mathematical Physics"
  ];

  const traits = [
    { icon: Telescope, title: "Stargazer", desc: "Been fascinated by the night sky since childhood" },
    { icon: Atom, title: "Problem Solver", desc: "Love tackling complex physics problems" },
    { icon: BookOpen, title: "Lifelong Learner", desc: "Always eager to discover new concepts" },
    { icon: Users, title: "Team Player", desc: "Easy to talk to and great in study groups" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cosmic bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An 18-year-old freshman with a passion for understanding how the universe works, 
            from the smallest particles to the largest cosmic structures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              My fascination with the cosmos began when I first looked through a telescope at age 12. 
              The sight of Saturn's rings and Jupiter's moons sparked a curiosity that eventually 
              led me to pursue physics in college.
            </p>
            <p className="text-muted-foreground mb-4">
              As an outgoing person, I love sharing my enthusiasm for science with others. Whether 
              it's explaining why stars twinkle or discussing the latest discoveries from space 
              missions, I find joy in making complex concepts accessible and exciting.
            </p>
            <p className="text-muted-foreground">
              Currently, I'm exploring various fields within physics, from quantum mechanics to 
              cosmology, as I work toward specializing in astrophysics and potentially pursuing 
              graduate research in observational astronomy.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {traits.map((trait, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-cosmic transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <trait.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{trait.title}</h4>
                  <p className="text-sm text-muted-foreground">{trait.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-primary text-center">Areas of Interest</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {interests.map((interest, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;