import React from "react";

import { Award, Calendar, ExternalLink } from "lucide-react";
import { Container } from "./ui/container";

const certificates = [
  {
    id: 1,
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2024",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
    credential: "#",
    description:
      "Certified in developing and maintaining applications on AWS platform",
  },
  {
    id: 2,
    title: "Google Cloud Professional",
    issuer: "Google Cloud Platform",
    date: "2023",
    image:
      "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=300&h=200&fit=crop",
    credential: "#",
    description:
      "Professional certification for cloud architecture and development",
  },
  {
    id: 3,
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2023",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
    credential: "#",
    description: "Advanced React development and best practices certification",
  },
  {
    id: 4,
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2022",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&h=200&fit=crop",
    credential: "#",
    description: "Comprehensive full stack development certification",
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
