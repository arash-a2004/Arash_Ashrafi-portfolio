
import { cn } from "@/lib/utils";

interface BadgeProps {
  text: string;
  className?: string;
}

const Badge = ({ text, className }: BadgeProps) => {
  return (
    <span 
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary",
        className
      )}
    >
      {text}
    </span>
  );
};

export default Badge;
