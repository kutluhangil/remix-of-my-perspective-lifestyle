import { useParams, Navigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import { getProjectById } from "@/data/projects";
import { ArrowLeft, Github, ExternalLink, Zap, Settings, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main>
        {/* Back Navigation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
          {/* Project Header */}
          <div className="mb-12 animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-accent text-accent-foreground">
                {project.category}
              </span>
              <span className="text-sm text-muted-foreground">Team of {project.teamSize}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {project.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8">{project.subtitle}</p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 border-t border-b border-border py-6">
              <Button asChild className="rounded-full px-8">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Repo
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8">
                <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
              <div className="ml-auto">
                <span className="text-sm text-muted-foreground">
                  My role: <strong className="text-foreground">{project.role}</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12 animate-slide-up stagger-1">
            <p className="text-lg leading-relaxed text-muted-foreground">{project.description}</p>
          </div>

          {/* API Info */}
          {project.apiInfo && (
            <div className="mb-12 rounded-2xl bg-accent/10 border border-accent/20 p-6 md:p-8 animate-slide-up stagger-1">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold">API Integration</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">{project.apiInfo.provider}</strong> — {project.apiInfo.description}
              </p>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-12 animate-slide-up stagger-2">
            <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 rounded-full text-sm font-medium bg-muted text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Core Features */}
          <div className="mb-12 rounded-2xl bg-card p-8 md:p-12 animate-slide-up stagger-3">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-5 h-5 text-accent" />
              <h2 className="text-2xl font-bold">Core Features (MVP)</h2>
            </div>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start text-muted-foreground">
                  <span className="mr-3 mt-1 text-accent">✦</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Features */}
          {project.additionalFeatures && project.additionalFeatures.length > 0 && (
            <div className="mb-12 rounded-2xl bg-card p-8 md:p-12 animate-slide-up stagger-3">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-5 h-5 text-accent" />
                <h2 className="text-2xl font-bold">Additional Features</h2>
              </div>
              <ul className="space-y-3">
                {project.additionalFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start text-muted-foreground">
                    <span className="mr-3 mt-1 text-accent">🚀</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Requirements */}
          {project.technicalRequirements && project.technicalRequirements.length > 0 && (
            <div className="mb-12 animate-slide-up stagger-3">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-5 h-5 text-accent" />
                <h2 className="text-2xl font-bold">Technical Requirements</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {project.technicalRequirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted">
                    <span className="text-accent mt-0.5">⚙️</span>
                    <span className="text-sm font-medium">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          <div className="mb-12 animate-slide-up stagger-4">
            <h2 className="text-2xl font-bold mb-6">Highlights</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.highlights.map((highlight, i) => (
                <div key={i} className="p-6 rounded-xl bg-muted">
                  <p className="font-medium">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-16 animate-slide-up stagger-5">
              <h2 className="text-2xl font-bold mb-8">Screenshots</h2>
              {project.screenshots.map((group, gi) => (
                <div key={gi} className="mb-8">
                  <h3 className="text-lg font-semibold text-muted-foreground mb-4">{group.label}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {group.images.map((img, ii) => (
                      <div key={ii} className="rounded-xl overflow-hidden border border-border">
                        <img src={img} alt={`${project.title} ${group.label} ${ii + 1}`} className="w-full h-auto object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </article>
      </main>
    </div>
  );
};

export default Project;
