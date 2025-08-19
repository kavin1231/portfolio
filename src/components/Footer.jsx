import React from "react";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Container } from "./ui/container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/kavin1231", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/chamath-fernando-74a787347/", label: "LinkedIn" },
    { icon: Mail, href: "#contact", label: "Email" }
  ];

  return (
    <footer className="bg-dark-200 border-t border-white/10">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="font-heading text-2xl font-bold text-gradient mb-4">
                Chamath Fernando
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Full Stack Developer passionate about creating exceptional
                digital experiences with modern technologies and innovative
                solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                {[
                  { label: "Home", href: "#" },
                  { label: "Projects", href: "#projects" },
                  { label: "Skills", href: "#skills" },
                  { label: "Contact", href: "#contact" }
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-muted-foreground hover:text-cyber-blue transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-white mb-4">Get In Touch</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>chamathkaveendra@gmail.com</p>
                <p>+94 77 473 6449</p>
                <p>Kalutara,Panadura</p>
              </div>

              <div className="flex gap-4 mt-6">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="p-2 glass glass-hover rounded-full hover:shadow-glow transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-cyber-blue" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Chamath Fernando. All rights reserved.
            </p>
            
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
