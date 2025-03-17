
import { Github, ExternalLink } from "lucide-react";
import Badge from "./Badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  className,
}: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:shadow-md hover:border-primary/20",
        className
      )}
    >
      <div className="space-y-4">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        
        <p className="text-muted-foreground">{description}</p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <Badge key={tech} text={tech} />
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={18} />
              <span>Code</span>
            </a>
          )}
          
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink size={18} />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
