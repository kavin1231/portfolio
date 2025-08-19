import React from "react";

import { Award, Calendar, ExternalLink } from "lucide-react";
import { Container } from "./ui/container";

const certificates = [
  {
    id: 1,
    title: "Full Stack Developer Certification Best Award",
    issuer: "SKYREC",
    date: "2025",
    image: "/MERN Certificate best award.png",
    credential:
      "https://certificate.skyrek.com/certifcates/completion/lX5zKJ8SG8I6",
    description:
      "Certified in developing and maintaining applications on MERN stack with best practices",
  },
  {
    id: 2,
    title: "Full Stack Developer Certification",
    issuer: "SKYREC",
    date: "2025",
    image: "/MERN Certificate.png",
    credential:
      "https://certificate.skyrek.com/certifcates/participation/ynlYnXz1bAWc",
    description:
      "Professional certification for MERN stack development covering MongoDB, Express, React, and Node.js",
  },
  {
    id: 3,
    title: "Git Training Certification",
    issuer: "Simplilearn",
    date: "2025",
    image: "/Git Training.jpg",
    credential:
      "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI3NTgiLCJjZXJ0aWZpY2F0ZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC84MzE4Mjg5Xzg2NTExNTAxNzQ2NzA5MDgwNzEyLnBuZyIsInVzZXJuYW1lIjoiS2F2aW5kcmEgY2hhbWF0aCBmZXJuYW5kbyJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F2823%2FGIT%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1407955014728153504&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVj3As9as0inRJDkmyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAAfFUodBAAAA",
    description:
      "Advanced Git training covering version control, branching, merging, and collaboration",
  },
  {
    id: 4,
    title: "MongoDB Node.js Developer Path Certification",
    issuer: "MongoDB",
    date: "2025",
    image: "/MongoDB Node.js Developer Path.jpg",
    credential: "https://learn.mongodb.com/c/UPdOJDVSRZSbQfrzZQxFgQ",
    description:
      "MongoDB certification for Node.js developers covering database design, CRUD operations, and performance optimization",
  },
  {
    id: 5,
    title: "Responsive Web Design Certification",
    issuer: "FreeCodeCamp",
    date: "2025",
    image: "/Responsive Web Design.jpg",
    credential:
      "https://www.freecodecamp.org/certification/fcc499318d5-f5c2-4534-b978-7a62b0c07456/responsive-web-design",
    description:
      "Responsive Web Design certification covering HTML, CSS, Flexbox, and Grid layout techniques",
  },
];

const achievements = [
  {
    icon: Award,
    title: "Tech Innovation Award",
    description:
      "Winner of the 2024 Innovation Challenge for AI-powered web application",
    year: "2024",
  },
  {
    icon: Award,
    title: "Open Source Contributor",
    description:
      "Active contributor to major open source projects with 100+ contributions",
    year: "2023",
  },
  {
    icon: Award,
    title: "Hackathon Champion",
    description: "First place in Global Web Development Hackathon 2023",
    year: "2023",
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="section-padding bg-gradient-to-b from-dark-200 to-dark-100"
    >
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-6">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my
            expertise and commitment to continuous learning.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-white mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="card-cyber group hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-100/60 to-transparent" />
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-white group-hover:text-cyber-blue transition-colors duration-300">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1 text-xs text-cyber-blue">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </div>
                    <a
                      href={cert.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 glass glass-hover rounded transition-all duration-300 hover:shadow-glow"
                    >
                      <ExternalLink className="w-4 h-4 text-cyber-blue" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="font-heading text-2xl font-semibold text-white mb-8 text-center">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="card-cyber text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex p-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {achievement.description}
                </p>
                <span className="inline-block px-3 py-1 bg-cyber-blue/10 text-cyber-blue text-xs font-medium rounded-full border border-cyber-blue/20">
                  {achievement.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Certificates;
