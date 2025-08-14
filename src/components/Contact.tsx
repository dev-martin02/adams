import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Calendar, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cosmic bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Always excited to discuss physics, astronomy, or collaborate on interesting projects. 
            Don't hesitate to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Let's Chat
                </CardTitle>
                <CardDescription>
                  I'm always open to discussing science, sharing ideas, or just having a friendly conversation about the universe!
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">quinonesa12@montclair.edu</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Schedule a Meeting</p>
                  <p className="text-sm text-muted-foreground">Happy to meet for coffee or study sessions</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Montclair State University, Physics Department</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Drop me a line and I'll get back to you as soon as possible!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What would you like to discuss?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project, question, or just say hello!" 
                  rows={4}
                />
              </div>
              <a href="mailto:quinonesa12@montclair.edu" className="text-foreground hover:text-primary transition-colors">

              <Button className="w-full bg-gradient-cosmic hover:shadow-cosmic transition-all duration-300">
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;