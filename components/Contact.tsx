import { Mail } from "lucide-react";
import { Linkedin, Github } from "@/components/Icons";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="py-24 bg-surface/30">
      <div className="max-w-3xl mx-auto px-6 text-left md:text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Let's Work Together</h2>
        <p className="text-lg text-foreground/80 mb-12 md:max-w-xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start md:justify-center gap-6 md:gap-12">
          <a href="mailto:hello@example.com" className="flex items-center gap-3 text-lg font-medium hover:text-accent transition-colors group">
            <span className="p-3 bg-surface rounded-full group-hover:scale-110 transition-transform"><Mail size={24} /></span>
            hello@example.com
          </a>
          <a href="https://www.linkedin.com/in/haroon-shahid-601ba5308/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-medium hover:text-accent transition-colors group">
            <span className="p-3 bg-surface rounded-full group-hover:scale-110 transition-transform"><Linkedin size={24} /></span>
            LinkedIn
          </a>
          <a href="https://github.com/haroon188" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-medium hover:text-accent transition-colors group">
            <span className="p-3 bg-surface rounded-full group-hover:scale-110 transition-transform"><Github size={24} /></span>
            GitHub
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}