
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Contact Me</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Feel free to reach out for collaborations, inquiries, or just to say hello!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    I'm always open to discussing new projects, opportunities, or partnerships.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a 
                        href="mailto:arashashrafi@khu.ac.ir" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        arashashrafi@khu.ac.ir
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/in/arash-ashrafi" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        linkedin.com/in/arash-ashrafi
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Github size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <a 
                        href="https://github.com/arash-a2004" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        github.com/arash-a2004
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">
                        Tehran, Iran
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400} animation="fade-in-left">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;
