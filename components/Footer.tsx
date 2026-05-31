import { Github, Linkedin, Twitter } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-surface/50 bg-background py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/70">
          Designed & built by Haroon Shahid · 2026
        </p>
        <div className="flex items-center gap-4 text-foreground/70">
          <a href="https://github.com/haroon188" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/haroon-shahid-601ba5308/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
}