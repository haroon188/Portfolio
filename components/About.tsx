"use client";

import AnimatedSection from "./AnimatedSection";

export default function About() {
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
            <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/80">
              <p>
                Hi, I&apos;m Haroon — an AI/ML Engineer and Full-Stack Developer who builds intelligent systems that solve real-world problems. I specialize in <strong>Machine Learning</strong>, <strong>Deep Learning</strong>, <strong>Computer Vision</strong>, and <strong>Generative AI</strong>.
              </p>
              <p>
                I work extensively with <strong>LangChain</strong>, <strong>RAG pipelines</strong>, <strong>vector databases</strong>, and the <strong>OpenAI API &amp; SDK</strong> to build production-grade AI applications. I also leverage <strong>n8n</strong> for workflow automation and integrate AI into scalable web platforms using <strong>Next.js</strong>, <strong>React</strong>, and <strong>Python</strong>.
              </p>
              <p>
                My approach combines deep technical expertise in neural networks and <strong>OpenCV</strong> with a strong product mindset — I don&apos;t just build models, I ship products that users love. From fine-tuning LLMs to deploying real-time computer vision systems, I enjoy tackling complex challenges end-to-end.
              </p>
              <p>
                When I&apos;m not training models or writing code, you&apos;ll find me exploring cutting-edge AI research, contributing to open-source, and sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
