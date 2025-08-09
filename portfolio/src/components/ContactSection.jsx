import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="heading-lg mb-6">
            Let's Create Something <span className="text-primary">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into stunning digital reality? Let's
            discuss your project and make it extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-md mb-8">Get in Touch</h3>
              <p className="text-lg text-muted-foreground mb-8">
                I'm always excited to work on new projects and collaborate with
                innovative teams. Let's bring your vision to life.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "hello@portfolio.dev",
                  link: "mailto:hello@portfolio.dev",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+1 (555) 123-4567",
                  link: "tel:+15551234567",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "San Francisco, CA",
                  link: "#",
                },
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 glass-strong rounded-xl flex items-center justify-center group-hover:animate-glow-pulse">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {contact.title}
                      </p>
                      <a
                        href={contact.link}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Availability */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                <span className="font-medium text-secondary">
                  Available for new projects
                </span>
              </div>
              <p className="text-muted-foreground">
                Currently accepting new client projects for Q2 2024. Let's
                discuss your timeline and requirements.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-strong p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="glass border-border bg-card/50 focus:border-primary transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="glass border-border bg-card/50 focus:border-primary transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="glass border-border bg-card/50 focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project, timeline, and goals..."
                  required
                />
              </div>

              <Button type="submit" className="btn-cinematic w-full group">
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            {/* Response Time */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Typical response time: 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
