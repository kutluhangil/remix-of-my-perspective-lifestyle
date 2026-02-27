const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Redux", "Flexbox & Grid"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "REST API"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "Vite", "XCode/VSCode", "Figma"],
  },
  {
    title: "Other",
    skills: ["Clean UI", "Prompt Engineering", "Vibecoding"],
  },
  {
    title: "Languages",
    skills: ["English — C1 Advanced", "Turkish — Native"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-12 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 animate-slide-up">
        Skills & Technologies
      </h2>
      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="animate-slide-up stagger-1">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 rounded-full text-sm font-medium bg-muted text-foreground hover:bg-accent hover:text-accent-foreground transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
