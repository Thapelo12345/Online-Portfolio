
import { useState } from "react";
import { Github, ExternalLink, Star } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techs: string[];
  liveUrl: string;
  githubUrl: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  techs,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[400px] rounded-xl overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${index * 0.2}s`,
        perspective: "1000px" 
      }}
    >
      <div
        className={`absolute inset-0 w-full h-full transition-all duration-500 ease-out ${
          isHovered ? "transform rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 w-full h-full glass"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-full h-3/5 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {techs.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary-foreground"
                >
                  {tech}
                </span>
              ))}
              {techs.length > 3 && (
                <span className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                  +{techs.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 w-full h-full p-6 flex flex-col glass"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <p className="text-pretty text-muted-foreground mb-6">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {techs.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mt-auto flex gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-2 px-4 rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <Github size={18} />
              <span>Code</span>
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:opacity-90 transition-colors"
            >
              <ExternalLink size={18} />
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
