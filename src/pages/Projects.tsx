
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "ERP API Platform",
      description: "Core back-end API for an ERP platform streamlining workflows for freelance interior designers and manufacturing teams.",
      technologies: ["C#", ".NET 8", "SQL Server", "Clean Architecture", "Microservices"],
      githubUrl: "https://github.com/arash-a2004",
    },
    {
      title: "Multi-tenant SaaS Backend",
      description: "Scalable SaaS solution with dynamic tenant management and performance optimization for enterprise-level operations.",
      technologies: ["ASP.NET Core", "Entity Framework", "JWT", "CQRS", "Repository Pattern"],
      githubUrl: "https://github.com/arash-a2004",
    },
    {
      title: "Secure Authentication Service",
      description: "Comprehensive authentication system with OAuth 2.0 and Keycloak integration for secure API access management.",
      technologies: ["C#", "OAuth 2.0", "Keycloak", "JWT", "Identity Server"],
      githubUrl: "https://github.com/arash-a2004",
    },
    {
      title: "Dynamic Query Builder",
      description: "High-performance API query system with dynamic filtering and sorting capabilities for efficient data retrieval.",
      technologies: [".NET Core", "LINQ", "Entity Framework", "API Design"],
      githubUrl: "https://github.com/arash-a2004",
    },
    {
      title: "Logging & Monitoring Solution",
      description: "Robust logging infrastructure with Serilog for comprehensive monitoring and troubleshooting in distributed systems.",
      technologies: ["C#", "Serilog", "Elasticsearch", "Kibana", ".NET"],
      githubUrl: "https://github.com/arash-a2004",
    },
    {
      title: "Data Migration Tool",
      description: "Efficient data migration utility for seamless transition between database systems with validation and error recovery.",
      technologies: [".NET Core", "SQL Server", "ETL", "Data Validation"],
      githubUrl: "https://github.com/arash-a2004",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Projects</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            A selection of my back-end development work and contributions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={200 + index * 100}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                />
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection className="mt-16 text-center" delay={800}>
            <p className="text-muted-foreground mb-4">
              More projects are available on my GitHub profile:
            </p>
            <a 
              href="https://github.com/arash-a2004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              View GitHub Profile
            </a>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Projects;
