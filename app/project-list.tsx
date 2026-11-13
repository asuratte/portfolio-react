import projectsData from "../data/projects.json"
import type { Project } from './types';
import ProjectCard from "./project-card";

const projects: Project[] = projectsData;

function ProjectList() {
  return (
    <section className="flex flex-col pt-6 gap-6 mx-6 max-w-6xl md:flex-row xl:mx-auto">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  )
}
export default ProjectList;
