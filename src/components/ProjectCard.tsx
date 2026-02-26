import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  technologies: string[];
  category: string;
}

const ProjectCard = ({ id, title, subtitle, image, technologies, category }: ProjectCardProps) => {
  return (
    <Link
      to={`/project/${id}`}
      className="group relative block rounded-[2.5rem] overflow-hidden card-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted rounded-[2.5rem]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-md bg-accent/80 text-accent-foreground">
              {category}
            </span>
          </div>

          <div className="flex items-end justify-between gap-4">
            <div className="flex-1">
              <p className="text-white/60 text-xs font-medium tracking-wider block mb-2">{subtitle}</p>
              <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight mb-3">
                {title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs bg-white/20 backdrop-blur-md text-white border border-white/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 floating-button">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
