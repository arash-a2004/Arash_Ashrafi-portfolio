
import AnimatedSection from "@/components/AnimatedSection";
import { Briefcase, GraduationCap, User } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-8">About Me</h1>
          
          <div className="space-y-12">
            <AnimatedSection 
              className="flex flex-col md:flex-row gap-8 items-start" 
              delay={200}
            >
              <div className="md:w-12 flex-shrink-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <User size={24} />
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-semibold">Who I Am</h2>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm Arash Ashrafi, a Back-End developer currently working at Bond Group. With a passion for building robust backend systems, I'm continuously expanding my knowledge and skills in C# and the .NET Framework.
                  </p>
                  
                  <p>
                    As a programmer, I'm committed to learning and growing in the field of software development. Currently, I am eager to learn systems design and systems architecture so that I can become a professional software developer.
                  </p>
                  
                  <p>
                    I am enthusiastic about programming and always eager to explore new tools and solving challenges to enhance my development skills. My GitHub profile showcases some of the projects I have worked on.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection 
              className="flex flex-col md:flex-row gap-8 items-start" 
              delay={400}
            >
              <div className="md:w-12 flex-shrink-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap size={24} />
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-semibold">Education</h2>
                
                <div className="p-6 rounded-lg border border-border bg-card">
                  <div className="flex flex-col sm:flex-row justify-between mb-2">
                    <h3 className="font-medium">Kharazmi University</h3>
                    <span className="text-muted-foreground text-sm">2020 - Present</span>
                  </div>
                  <p className="text-muted-foreground mb-2">Bachelor's degree, Computer Engineering</p>
                  <p className="text-sm text-muted-foreground">
                    My academic background has equipped me with the ability to tackle complex challenges and contribute to impactful projects.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection 
              className="flex flex-col md:flex-row gap-8 items-start" 
              delay={600}
            >
              <div className="md:w-12 flex-shrink-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Briefcase size={24} />
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-semibold">Certifications</h2>
                
                <div className="p-6 rounded-lg border border-border bg-card">
                  <div className="flex flex-col sm:flex-row justify-between mb-2">
                    <h3 className="font-medium">Daneshkar .Net Certificate</h3>
                    <span className="text-muted-foreground text-sm">2023</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-muted-foreground">Advanced .NET Development</p>
                    <a 
                      href="https://file.daneshkar.net/public/user_240842/certificate_dot_net.pdf?response-content-disposition=filename%3Dcertificate_dot_net.pdf&response-content-type=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ADMIN%2F20250317%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250317T072037Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=9d4df7b8423f9df582a72fbbf3eb653d6a18ba1b4c2e1598a5498f651a722463" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
