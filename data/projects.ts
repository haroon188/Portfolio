export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    slug: "first-ai-agent",
    title: "AI Command Parser Agent",
    description: "An intelligent AI agent that parses natural language commands into structured data.",
    longDescription: `The First AI Agent project focuses on creating a bridge between natural human language and structured system commands. Leveraging advanced Large Language Models (LLMs), it can interpret complex user intents and extract relevant parameters for automated workflows.

Built with performance and scalability in mind, it provides a flexible API that can be integrated into various productivity tools and automation systems. It demonstrates the power of prompt engineering and structured output parsing in modern AI applications.`,
    tech: ["Python", "OpenAI API", "LangChain", "FastAPI"],
    liveUrl: "https://github.com/haroon188/FIRST-AI-AGENT",
    githubUrl: "https://github.com/haroon188/FIRST-AI-AGENT",
  },
  {
    slug: "ecommerce-project",
    title: "Full-Stack Ecommerce Store",
    description: "A comprehensive ecommerce platform with a focus on seamless user experience and secure transactions.",
    longDescription: `This Ecommerce Project is a robust, full-stack application designed to provide a complete online shopping experience. It features a dynamic product catalog, intuitive search and filtering, a persistent shopping cart, and a secure checkout process.

The project highlights high-performance frontend rendering combined with a scalable backend architecture. It also includes an administrative interface for managing products, categories, and viewing order analytics, ensuring a complete business solution.`,
    tech: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "https://github.com/haroon188/ECOMMERCE-PROJECT",
    githubUrl: "https://github.com/haroon188/ECOMMERCE-PROJECT",
  },
  {
    slug: "face-detection",
    title: "Real-Time Face Detection",
    description: "Computer vision application for detecting and tracking faces in real-time through webcam feeds.",
    longDescription: `The Face Detection application utilizes computer vision algorithms to identify human faces within video streams. By processing frames in real-time, it can draw bounding boxes and track facial features with high accuracy and low latency.

This project showcases the integration of heavy mathematical models with a responsive web interface. It serves as a foundation for more advanced features like facial recognition, emotion analysis, or augmented reality filters.`,
    tech: ["JavaScript", "React", "OpenCV.js", "Webcam API"],
    liveUrl: "https://github.com/haroon188/FACE-DETECTION",
    githubUrl: "https://github.com/haroon188/FACE-DETECTION",
  }
];
