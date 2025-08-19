import React from "react";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";
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
      "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI3NTgiLCJjZXJ0aWZpY2F0ZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC84MzE4Mjg5Xzg2NTExNTAxNzQ2NzA5MDgwNzEyLnBuZyIsInVzZXJuYW1lIjoiS2F2aW5kcmEgY2hhbWF0aCBmZXJuYW5kbyJ9",
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

const experiences = [
  {
    role: "Full Stack Developer (Intern)",
    company: "Tech Solutions Pvt Ltd",
    year: "2024 - 2025",
    description:
      "Worked on building MERN stack applications, implemented REST APIs, and integrated Supabase for media storage.",
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    year: "2023 - Present",
    description:
      "Designed and developed modern websites and web apps for clients using React, Tailwind CSS, and Node.js.",
  },
  {
    role: "Academic Project",
    company: "Sliit University",
    year: "2023",
    description:
      "Developed an agricultural marketplace platform with farmer registration, product listings, and order management features.",
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
            Certificates & Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and industry experience that validate my
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

        {/* Experience Section */}
        <div>
          <h3 className="font-heading text-2xl font-semibold text-white mb-8 text-center">
            Work Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className="card-cyber text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex p-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">{exp.role}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {exp.company}
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  {exp.description}
                </p>
                <span className="inline-block px-3 py-1 bg-cyber-blue/10 text-cyber-blue text-xs font-medium rounded-full border border-cyber-blue/20">
                  {exp.year}
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
