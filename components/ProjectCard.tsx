"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/Icons";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3 }}
      className="bg-surface rounded-xl overflow-hidden shadow-lg border border-foreground/5 hover:shadow-2xl hover:border-accent/30 flex flex-col h-full transition-shadow"
    >
      <Link href={`/projects/${project.slug}`} className="flex-grow p-6 flex flex-col group">
        <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-foreground/70 mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span key={t} className="text-xs font-semibold px-2 py-1 bg-background rounded text-accent">
              {t}
            </span>
          ))}
        </div>
      </Link>
      
      <div className="px-6 py-4 border-t border-foreground/5 flex gap-4 bg-background/50 relative z-10">
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-accent transition-colors flex items-center gap-1 text-sm font-medium"
          onClick={(e) => e.stopPropagation()}
        >
          <Github size={16} /> GitHub
        </a>
        <a 
          href={project.liveUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-accent transition-colors flex items-center gap-1 text-sm font-medium"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={16} /> Live Demo
        </a>
      </div>
    </motion.div>
  );
}
