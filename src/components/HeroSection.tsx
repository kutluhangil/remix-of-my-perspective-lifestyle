import { Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left - Content */}
        <div className="space-y-6 md:space-y-8 order-2 md:order-1">
          <div className="animate-float-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-accent">
              Full Stack Developer
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight animate-float-up"
            style={{ animationDelay: '0.2s' }}
          >
            Hello, my name is Kutluhan Gül
          </h1>

          <p
            className="text-muted-foreground text-lg leading-relaxed max-w-lg animate-float-up"
            style={{ animationDelay: '0.35s' }}
          >
            Full Stack Developer in transition with a background in hospitality and tech support.
            Building modern, responsive web applications with clean architecture and scalable solutions.
          </p>

          <div
            className="flex flex-wrap items-center gap-3 pt-2 animate-float-up"
            style={{ animationDelay: '0.5s' }}
          >
            <Button
              asChild
              className="rounded-full px-8 py-5 text-sm font-medium transition-all hover:scale-105"
            >
              <a href="#projects">Projects</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 py-5 text-sm font-medium transition-all hover:scale-105"
            >
              <a
                href="https://www.linkedin.com/in/kutluhangil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            <div className="flex items-center gap-2 ml-2">
              <a
                href="https://github.com/kutluhangil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border hover:border-foreground transition-all flex items-center justify-center hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border hover:border-foreground transition-all flex items-center justify-center hover:scale-110"
                aria-label="Download CV"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right - Photo with decorative circle */}
        <div
          className="relative flex justify-center md:justify-end order-1 md:order-2 animate-float-up"
          style={{ animationDelay: '0.3s' }}
        >
          {/* Decorative circle behind photo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[90%] aspect-square rounded-full bg-accent/15" />
          
          {/* Photo */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-4 ring-background shadow-xl">
            <img
              src={profilePhoto}
              alt="Kutluhan Gül"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
