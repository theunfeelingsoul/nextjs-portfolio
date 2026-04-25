import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import ProjectGallery from "@/components/ProjectGallery";
import TechList from "@/components/TechList";

export default function ProjectPage({ params }) {
  // const project = projects.find(
  //   (p) => p.slug === params.slug
  // );

  const project = projects[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">
        {project.title}
      </h1>

      <p>{project.description}</p>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          Technologies
        </h2>
        <TechList tech={project.tech} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          Gallery
        </h2>
        <ProjectGallery images={project.images} />
      </section>
    </main>
  );
}
