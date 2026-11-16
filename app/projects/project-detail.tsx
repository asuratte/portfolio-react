import projectsData from "../../data/projects.json";
import type { Project } from "../types";
import { useParams } from "react-router";

const projects: Project[] = projectsData;

export function ProjectDetail() {
  let params = useParams();
  const project = projects.find((item) => item.id === Number(params.projectId));

  if (!project) {
    return <p className="text-center py-6">Project not found.</p>;
  }

  return (
    <section className="flex-row py-6 gap-6 mx-6 max-w-6xl xl:mx-auto">
      <div>
        <h1 className="text-2xl font-medium font-heading text-black mb-3">{project.name}</h1>
        <p className="text-lg mb-3 text-black">{project.short_description}</p>
        <p className="mb-6 text-base">{project.long_description}</p>
        <img src={project.detail_image_source} alt={project.name} />
      </div>
      <div></div>
    </section>
  );
}
