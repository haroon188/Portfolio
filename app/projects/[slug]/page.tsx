import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Github } from "@/components/Icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 w-full">
      <Link 
        href="/#projects" 
        className="inline-flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors mb-12 group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to projects
      </Link>

      <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">{project.title}</h1>
      
      <div className="flex flex-wrap gap-3 mb-12">
        {project.tech.map(t => (
          <span key={t} className="text-sm font-semibold px-3 py-1.5 bg-surface rounded-md text-accent">
            {t}
          </span>
        ))}
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-16 whitespace-pre-line text-foreground/80">
        {project.longDescription || project.description}
      </div>

      <div className="flex flex-wrap gap-6">
        <a 
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-md font-semibold hover:scale-105 transition-transform duration-200 shadow-lg"
        >
          <ExternalLink size={20} /> Live Demo
        </a>
        <a 
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-surface text-foreground border border-surface px-8 py-4 rounded-md font-semibold hover:scale-105 transition-transform duration-200"
        >
          <Github size={20} /> View Source
        </a>
      </div>
    </div>
  );
}
