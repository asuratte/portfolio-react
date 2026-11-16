import projectsData from "../../data/projects.json"
import type { Project } from '../types';
import ProjectCard from "../project-card";

const projects: Project[] = projectsData;

export function Projects() {
  return (
    <section className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 pt-6 gap-6 mx-6 max-w-6xl xl:mx-auto w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
