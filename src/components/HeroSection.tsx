import { Linkedin, Github, Download, ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative my-12 py-16 md:py-24 lg:py-32 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        {/* Minimal top line */}
        <div className="flex items-center gap-4 mb-12 animate-float-up" style={{ animationDelay: '0.1s' }}>
          <div className="h-px bg-foreground/20 animate-line-expand w-16" style={{ animationDelay: '0.3s' }} />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
            Full Stack Developer
          </span>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-[1fr,auto] gap-12 md:gap-16 items-end">
          {/* Left - Typography */}
          <div className="space-y-8">
            <h1 className="space-y-2">
              <span
                className="block text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight animate-float-up"
                style={{ animationDelay: '0.2s' }}
              >
                Kutluhan
              </span>
              <span
                className="block text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight animate-float-up bg-gradient-to-r from-foreground via-foreground/70 to-foreground bg-clip-text text-transparent animate-shimmer"
                style={{
                  animationDelay: '0.35s',
                  backgroundImage: 'linear-gradient(90deg, hsl(var(--foreground)) 0%, hsl(var(--muted-foreground)) 50%, hsl(var(--foreground)) 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Gül
              </span>
            </h1>

            <p
              className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg animate-float-up"
              style={{ animationDelay: '0.5s' }}
            >
              Building modern, responsive web applications with clean architecture — transitioning from hospitality to code.
            </p>

            {/* Action row */}
            <div
              className="flex items-center gap-6 pt-4 animate-float-up"
              style={{ animationDelay: '0.65s' }}
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 text-sm font-medium tracking-wide uppercase hover:text-accent transition-colors"
              >
                View Projects
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <div className="h-4 w-px bg-border" />

              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/kutluhangil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border hover:border-foreground transition-all flex items-center justify-center hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
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

          {/* Right - Photo */}
          <div
            className="animate-float-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src={profilePhoto}
                alt="Kutluhan Gül"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 animate-float-up" style={{ animationDelay: '0.8s' }}>
          <div className="h-px bg-gradient-to-r from-border via-foreground/20 to-transparent animate-line-expand" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
