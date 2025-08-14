import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Rocket, Calculator, Star } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Stellar Classification App",
      description: "A web application that classifies stars based on their spectral characteristics using machine learning algorithms.",
      detailedDescription: "This project combines my passion for astronomy with machine learning to create an intelligent star classification system. Using spectral data and advanced algorithms, the app can identify stellar types, estimate temperatures, and predict stellar evolution phases. Built with Python and scikit-learn, it processes astronomical datasets to help students and researchers understand stellar characteristics.",
      tags: ["Python", "Machine Learning", "Astronomy", "Data Analysis"],
      technologies: ["Python", "scikit-learn", "NumPy", "Matplotlib", "Pandas", "Astropy"],
      features: ["Spectral Analysis", "Temperature Estimation", "Stellar Type Classification", "Data Visualization", "Batch Processing"],
      icon: Star,
      status: "In Progress",
      github: "#",
      demo: "#"
    },
    {
      title: "Orbital Mechanics Calculator",
      description: "Interactive calculator for computing satellite orbits, escape velocities, and planetary motion parameters.",
      detailedDescription: "An educational web application that makes complex orbital mechanics concepts accessible to physics students. The calculator handles various orbital scenarios including satellite trajectories, escape velocities, and planetary motion calculations. Features real-time visualizations and step-by-step solutions to help users understand the underlying physics principles.",
      tags: ["JavaScript", "Physics", "Mathematics", "Visualization"],
      technologies: ["JavaScript", "React", "Three.js", "Chart.js", "MathJax"],
      features: ["Orbit Visualization", "Escape Velocity Calculator", "Hohmann Transfer", "Kepler's Laws", "Interactive 3D Models"],
      icon: Rocket,
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      title: "Quantum State Visualizer",
      description: "Educational tool to visualize quantum mechanical wave functions and probability distributions.",
      detailedDescription: "An interactive visualization tool designed to make quantum mechanics more intuitive for physics students. The application renders wave functions, probability distributions, and quantum states in real-time, allowing users to manipulate parameters and observe how quantum systems behave. Perfect for understanding concepts like superposition, entanglement, and wave-particle duality.",
      tags: ["Python", "Quantum Physics", "Matplotlib", "Education"],
      technologies: ["Python", "Matplotlib", "NumPy", "SciPy", "Jupyter", "Plotly"],
      features: ["Wave Function Plotting", "Probability Distributions", "Quantum State Manipulation", "Interactive Parameters", "Educational Modules"],
      icon: Calculator,
      status: "Planning",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-nebula">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cosmic bg-clip-text text-transparent">
            Projects & Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining my passion for physics with programming to create tools and visualizations 
            that help understand complex scientific concepts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-cosmic transition-all duration-300 group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <project.icon className="h-8 w-8 text-primary group-hover:animate-float" />
                      <Badge 
                        variant={project.status === "Completed" ? "default" : project.status === "In Progress" ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm" variant="secondary" className="flex-1" onClick={(e) => e.stopPropagation()}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <project.icon className="h-8 w-8 text-primary" />
                    <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                    <Badge 
                      variant={project.status === "Completed" ? "default" : project.status === "In Progress" ? "secondary" : "outline"}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <DialogDescription className="text-base">
                    {project.detailedDescription}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-8">
                  <Button className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </Button>
                  <Button variant="secondary" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            More projects coming soon as I continue my studies and research!
          </p>
          <Button variant="outline" size="lg" className="backdrop-blur-sm">
            <Github className="mr-2 h-5 w-5" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;