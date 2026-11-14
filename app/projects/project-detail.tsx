import projectsData from "../../data/projects.json";
import type { Project } from "../types";
import { useParams } from "react-router";

const projects: Project[] = projectsData;

export function ProjectDetail() {
  let params = useParams();
  const project = projects.find((item) => item.id === Number(params.projectId));

  // 3. Handle missing/invalid IDs so TypeScript knows 'project' is defined below
  if (!project) {
    return <p className="text-center py-6">Project not found.</p>;
  }

  return (
    <section className="flex-row text-center py-6 gap-6 mx-6 max-w-6xl xl:mx-auto">
      <div>
        <h2>{project.name}</h2>
        <p>{project.short_description}</p>
        {/* 4. Add alt text for accessibility */}
        <img src={project.detail_image_source} alt={project.name} />
        <p>{project.long_description}</p>
      </div>
    </section>
  );
}
