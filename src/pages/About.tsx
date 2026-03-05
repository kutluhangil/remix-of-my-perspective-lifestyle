import Header from "@/components/Header";
import { Download, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const skills = [
  "HTML/CSS", "JavaScript", "React", "TypeScript", "Node.js",
  "REST API", "Redux", "Git", "Vite", "Figma",
  "Clean UI", "Prompt Engineering", "Vibecoding",
];

const experience = [
  {
    company: "Amazon (Remote)",
    role: "Senior Selling Partner Support Associate",
    period: "Aug 2022 – Nov 2024",
    description:
      "Delivered multi-channel technical support (chat, email, and phone) to over 60 active sellers across multiple European marketplaces, including the UK, resolving complex issues related to product listings, catalog errors, account health, and platform policies. Assisted sellers with product uploads, listing optimization, inventory management, payment processes, and troubleshooting backend system errors, ensuring compliance and operational continuity.",
  },
  {
    company: "Crowne Plaza Istanbul Tuzla Viaport Marina",
    role: "Guest Service Agent",
    period: "Sep 2021 – Aug 2022",
    description:
      "Managed front-desk services, handling reservations, check-ins/check-outs, secure transactions, and guest inquiries to ensure a smooth and professional experience.",
  },
  {
    company: "Radisson Blu Hotel & Spa, Istanbul Tuzla",
    role: "Guest Service Agent",
    period: "May 2019 – Sep 2021",
    description:
      "Delivered front-desk operations and guest support, handling reservations, check-ins/check-outs, and payment transactions while ensuring a smooth and professional guest experience.",
  },
  {
    company: "Hospitality — Park City, Utah, USA",
    role: "Floor Supervisor & Inspector / Night Supervisor",
    period: "2013 – 2016 (3+ Years)",
    description:
      "Gained hands-on experience at Westgate Resorts, Canyons Resort, and 7-Eleven. Progressed to supervisory responsibilities, ensuring high standards of cleanliness and operational efficiency, conducting inspections, managing inventory, and supporting team training. Significantly strengthened English communication skills by working directly with international guests and teams in dynamic, multicultural settings.",
  },
];

const education = [
  { school: "IT School GoIT", degree: "Full Stack Developer", period: "2025 – Present", highlight: true },
  { school: "Anadolu University", degree: "Associate's — Computer Programming", period: "2022 – 2026", highlight: false },
  { school: "Anadolu University", degree: "Associate's — Web Coding", period: "2019 – 2021", highlight: false },
  { school: "Atılım University", degree: "Master's — Tourism & Travel Services Management", period: "2017 – 2019", highlight: false },
  { school: "Mustafa Kemal University", degree: "Bachelor's — Tourism & Hotel Management", period: "2009 – 2014", highlight: false },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
            Full Stack Developer in transition with 8+ years of international professional experience, 
            now building modern web applications with clean architecture and scalable solutions.
          </p>
        </div>

        {/* Professional Summary */}
        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12 animate-slide-up stagger-2">
          <h2 className="text-3xl font-bold mb-6">Professional Summary</h2>
          <p className="text-muted-foreground leading-relaxed">
            Full Stack Developer in transition with 2.5+ years of experience as a Senior Selling Partner Support 
            Associate at Amazon, where I worked in a structured, high-performance environment handling complex cases, 
            policy-based evaluations, and cross-functional collaboration. In 2024, I made a deliberate career shift 
            into software development and began an intensive Full Stack Development program to build strong technical 
            foundations in modern web technologies. Since then, I have been actively developing personal and team-based 
            projects using HTML, CSS, JavaScript, React, and Node.js, focusing on responsive design, clean architecture, 
            and scalable solutions. Backed by 8+ years of international professional experience, including hospitality 
            and supervisory roles in the United States, I bring strong analytical thinking, problem-solving skills, 
            adaptability, and a disciplined work ethic. I am now focused on growing as a developer and contributing to 
            impactful, user-centered digital products.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="px-5 py-2.5 rounded-full text-sm font-medium bg-muted text-foreground">
                {skill}
              </span>
            ))}
            <span className="px-5 py-2.5 rounded-full text-sm font-medium bg-accent text-accent-foreground">
              English — C1 Advanced
            </span>
            <span className="px-5 py-2.5 rounded-full text-sm font-medium bg-accent text-accent-foreground">
              Turkish — Native
            </span>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-6 h-6 text-accent" />
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </div>
          <div className="relative space-y-0">
            {/* Timeline line */}
            <div className="absolute left-[18px] top-6 bottom-6 w-px bg-border hidden md:block" />
            {experience.map((exp, i) => (
              <div key={i} className="relative flex gap-6 group">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center pt-6">
                  <div className="w-[10px] h-[10px] rounded-full bg-accent z-10" />
                </div>
                <div className="flex-1 p-6 rounded-xl bg-muted mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-accent mb-3">{exp.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-accent" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i} className={`p-6 rounded-xl border ${edu.highlight ? 'bg-accent/10 border-accent/30' : 'bg-card border-border'}`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="font-semibold">{edu.school}</h3>
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{edu.degree}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Download CV */}
        <section className="text-center py-12 rounded-2xl bg-card">
          <h2 className="text-3xl font-bold mb-4">Interested?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download my full CV for more details about my experience and qualifications.
          </p>
          <Button className="rounded-full px-8">
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </section>
      </main>
    </div>
  );
};

export default About;
