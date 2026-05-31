"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const name = "Haroon Shahid";
  const nameLetters = Array.from(name);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const letterVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, damping: 12, stiffness: 100 },
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-20">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-accent/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          <h1 
            className="font-heading font-extrabold tracking-tight leading-none mb-4 flex flex-wrap"
            style={{ fontSize: "clamp(3rem, 7vw, 8rem)" }}
          >
            {nameLetters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={letter === " " ? "w-[0.2em]" : "inline-block"}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl md:text-3xl text-foreground/80 font-medium mb-10"
          >
            AI/ML Engineer · Full-Stack Developer · GenAI Builder
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link 
              href="#projects"
              className="bg-accent text-white px-8 py-4 rounded-md font-semibold hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              View My Work
            </Link>
            <a 
              href="#"
              className="bg-surface text-foreground border border-surface px-8 py-4 rounded-md font-semibold hover:scale-105 transition-transform duration-200"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}