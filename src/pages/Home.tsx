
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import Badge from "@/components/Badge";

const Home = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <AnimatedSection className="flex-1 space-y-6" delay={100}>
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Arash Ashrafi
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                Back-End Developer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Building robust, scalable back-end systems with C# and .NET. 
              Currently focused on creating enterprise-level APIs and microservices.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge text="C#" />
              <Badge text=".NET Core" />
              <Badge text="ASP.NET" />
              <Badge text="SQL Server" />
              <Badge text="Entity Framework" />
              <Badge text="Clean Architecture" />
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link 
                to="/projects" 
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                View Projects
                <ArrowRight size={18} />
              </Link>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-6 py-3 text-foreground font-medium hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Contact Me
              </Link>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="flex-1 flex justify-center" delay={300} animation="fade-in-left">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 blur-xl opacity-70"></div>
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/f17975ca-7128-4a7d-987e-81752bf6b33a.png" 
                  alt="Arash Ashrafi" 
                  className="w-full object-cover aspect-square rounded-xl"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        <AnimatedSection className="mt-32 max-w-4xl mx-auto text-center" delay={600}>
          <h2 className="text-3xl font-semibold mb-6">
            Currently Working At
          </h2>
          <div className="flex flex-col items-center p-8 rounded-xl bg-white border border-border shadow-sm">
            <div className="text-2xl font-semibold text-foreground">Bond Group</div>
            <p className="text-muted-foreground mt-2">
              Back-End Developer for ERP Platform
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Home;
