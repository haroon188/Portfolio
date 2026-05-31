"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  gradient: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    icon: "🧠",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
    gradient: "from-purple-500/20 to-blue-500/20",
  },
  {
    title: "Generative AI",
    icon: "✨",
    skills: [
      "OpenAI API & SDK",
      "LangChain",
      "RAG Pipelines",
      "Vector Databases",
      "Pinecone",
      "ChromaDB",
      "Prompt Engineering",
      "LLM Fine-Tuning",
    ],
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "Computer Vision",
    icon: "👁️",
    skills: [
      "OpenCV",
      "Image Processing",
      "Object Detection",
      "Face Recognition",
      "YOLO",
      "MediaPipe",
      "Video Analysis",
    ],
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Automation & Tools",
    icon: "⚙️",
    skills: [
      "n8n",
      "Python",
      "FastAPI",
      "Docker",
      "Git",
      "REST APIs",
      "Figma",
    ],
    gradient: "from-pink-500/20 to-violet-500/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, damping: 20, stiffness: 100 },
  },
};

const skillPillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, damping: 15, stiffness: 200 },
  },
};

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            From machine learning pipelines to production web apps — here&apos;s
            the tech stack I work with daily.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className={`relative group rounded-2xl border border-foreground/[0.06] bg-surface/50 backdrop-blur-sm p-6 hover:border-accent/30 transition-colors duration-300 overflow-hidden`}
            >
              {/* Gradient glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-heading font-bold">
                    {category.title}
                  </h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={skillPillVariants}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="bg-background/60 border border-foreground/[0.08] px-3 py-1.5 rounded-lg text-xs font-medium cursor-default hover:border-accent/40 hover:text-accent transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
