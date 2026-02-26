const skills = [
  { name: "HTML/CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "REST API", category: "Backend" },
  { name: "Redux", category: "Frontend" },
  { name: "Git", category: "Tools" },
  { name: "XCode/VSCode", category: "Tools" },
  { name: "Clean UI", category: "Design" },
  { name: "Prompt Engineering", category: "AI" },
];

const SkillsSection = () => {
  return (
    <section className="py-12 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 animate-slide-up">
        Skills & Technologies
      </h2>
      <div className="flex flex-wrap gap-3 animate-slide-up stagger-1">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="px-5 py-2.5 rounded-full text-sm font-medium bg-muted text-foreground hover:bg-accent hover:text-accent-foreground transition-all cursor-default"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
