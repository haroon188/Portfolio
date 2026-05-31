"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", 
    "React", "Next.js", "Node.js", "Python", 
    "Tailwind CSS", "Git", "Figma", "PostgreSQL"
  ];

  return (
    <AnimatedSection id="about" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-accent/20 border-4 border-surface overflow-hidden shadow-2xl relative flex items-center justify-center">
              {/* Fallback avatar */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-surface opacity-50"></div>
              <span className="relative z-10 font-heading font-bold text-6xl text-accent/50">HS</span>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/80 mb-10">
              <p>
                Hi, I'm Haroon, a passionate full-stack developer based in the digital realm. I love building intuitive, performant, and beautiful web applications from the ground up.
              </p>
              <p>
                My journey in web development started when I realized the power of combining logic with creative design. Since then, I've been constantly learning and pushing the boundaries of what's possible on the web.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-heading font-bold mb-6">Technologies I work with:</h3>
              <motion.div 
                className="flex flex-wrap gap-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  visible: { transition: { staggerChildren: 0.08 } },
                  hidden: {}
                }}
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className="bg-surface border border-foreground/10 px-4 py-2 rounded-md text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
