import React from "react";


import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";

const Hero = () => {
  const handleDownloadCV = () => {
    // Replace this with actual CV download logic (e.g., link to PDF file)
    console.log("Downloading CV...");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative mx-auto w-48 h-48 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full animate-glow-pulse" />
            <div className="absolute inset-2 bg-dark-200 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-hero font-bold text-gradient-hero animate-slide-up">
              John Developer
            </h1>
            <p
              className="text-xl md:text-2xl text-muted-foreground font-medium animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Full Stack Developer & UI/UX Designer
            </p>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              Crafting exceptional digital experiences with modern technologies.
              Passionate about creating scalable solutions and beautiful
              interfaces.
            </p>
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button onClick={handleDownloadCV} className="btn-cyber group">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
            <Button variant="outline" className="btn-outline-cyber">
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex gap-6 justify-center animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#contact", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 glass glass-hover rounded-full hover:shadow-glow transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-cyber-blue" />
              </a>
            ))}
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-blue rounded-full p-1">
          <div className="w-1 h-3 bg-cyber-blue rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
