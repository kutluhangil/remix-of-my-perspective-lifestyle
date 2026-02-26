import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import SkillsSection from "@/components/SkillsSection";
import { projects } from "@/data/projects";
import { Github, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />
        <IntroSection />
        <SkillsSection />

        {/* Projects Grid */}
        <section id="projects" className="py-12">
          <div className="flex items-center justify-between mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className={`animate-slide-up stagger-${Math.min(index + 1, 6)}`}>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  subtitle={project.subtitle}
                  image={project.image}
                  technologies={project.technologies}
                  category={project.category}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="my-20 rounded-[2.5rem] bg-card p-12 md:p-16 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's connect.</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm always open to new opportunities, collaborations, and interesting projects. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all inline-block"
              >
                Get in Touch
              </a>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/kutluhangil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/kutluhangil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#projects" className="hover:text-accent transition-colors">Projects</a></li>
                <li><a href="/about" className="hover:text-accent transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/contact" className="hover:text-accent transition-colors">Get in Touch</a></li>
                <li><a href="mailto:kutluhangul@windowslive.com" className="hover:text-accent transition-colors">Email</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://www.linkedin.com/in/kutluhangil/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com/kutluhangil" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Kutluhan Gül. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
