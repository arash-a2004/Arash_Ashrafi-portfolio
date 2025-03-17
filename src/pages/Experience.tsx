
import AnimatedSection from "@/components/AnimatedSection";
import Badge from "@/components/Badge";

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Experience</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            My professional journey building back-end systems and APIs.
          </p>
          
          <div className="space-y-12">
            <AnimatedSection 
              className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-border"
              delay={200}
            >
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary -translate-x-1/2"></div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h2 className="text-2xl font-semibold">Bond Group</h2>
                    <div className="text-sm text-muted-foreground">Present</div>
                  </div>
                  <div className="text-lg font-medium">Back-end Developer</div>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Currently working as a back-end developer for Bond, developing and maintaining the core APIs for an ERP platform that streamlines workflows for freelance interior designers and manufacturing teams.
                  </p>
                  
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Built a scalable SaaS solution using C#, .NET 8, and WPF</li>
                    <li>Implemented high-performance APIs for multi-tenant management</li>
                    <li>Designed and implemented Clean Architecture with SOLID principles</li>
                    <li>Used repository pattern and unit-of-work for maintainable code</li>
                    <li>Enforced security with JWT authentication and Serilog logging</li>
                    <li>Added hash ID obfuscation for enhanced data protection</li>
                    <li>Implemented dynamic query filtering and comprehensive testing</li>
                  </ul>
                  
                  <div className="pt-4 flex flex-wrap gap-2">
                    <Badge text="C#" />
                    <Badge text=".NET 8" />
                    <Badge text="ASP.NET Core" />
                    <Badge text="SQL Server" />
                    <Badge text="Entity Framework" />
                    <Badge text="WPF" />
                    <Badge text="Clean Architecture" />
                    <Badge text="JWT" />
                    <Badge text="Microservices" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection 
              className="mt-12 space-y-8 border border-border rounded-lg p-8"
              delay={400}
            >
              <h2 className="text-2xl font-semibold">Technical Expertise</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Languages</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>C#</li>
                    <li>SQL</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Frameworks & Libraries</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>.NET Core / .NET 8</li>
                    <li>ASP.NET</li>
                    <li>Entity Framework</li>
                    <li>WPF</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Tools & Platforms</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>SQL Server</li>
                    <li>Git</li>
                    <li>Visual Studio</li>
                    <li>Azure DevOps</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Architecture</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Clean Architecture</li>
                    <li>Microservices</li>
                    <li>CQRS</li>
                    <li>Repository Pattern</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Security</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>JWT Authentication</li>
                    <li>Keycloak Integration</li>
                    <li>API Security</li>
                    <li>OAuth 2.0</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Practices</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>SOLID Principles</li>
                    <li>Test-Driven Development</li>
                    <li>CI/CD</li>
                    <li>Agile Methodologies</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Experience;
