import React from "react";

import { Code, Database, Palette, Server } from "lucide-react";
import { Container } from "./ui/container";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Vue.js", level: 82 },
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express", level: 88 },
      { name: "Python", level: 85 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    icon: Database,
    title: "Database & Cloud",
    skills: [
      { name: "MongoDB", level: 89 },
      { name: "PostgreSQL", level: 86 },
      { name: "AWS", level: 83 },
      { name: "Docker", level: 80 },
    ],
  },
  {
    icon: Palette,
    title: "Design & UX",
    skills: [
      { name: "UI/UX Design", level: 87 },
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 80 },
      { name: "Prototyping", level: 83 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
            in modern web development.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="card-cyber animate-fade-in hover-lift"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="animate-fade-in"
                    style={{
                      animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-white">
                        {skill.name}
                      </span>
                      <span className="text-xs text-cyber-blue font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress animate-skill-fill"
                        style={{
                          '--skill-width': `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.5 + skillIndex * 0.2}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <div className="mt-16 text-center">
          <h3 className="font-heading text-2xl font-semibold text-white mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Vue.js",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "AWS",
              "Docker",
              "Git",
              "Tailwind CSS",
              "Figma",
              "GraphQL",
              "REST APIs",
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 glass glass-hover rounded-full text-sm font-medium text-white transition-all duration-300 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
