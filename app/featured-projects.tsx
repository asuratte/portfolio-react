import projectsData from "../data/projects.json"
import type { Project } from './types';
import ProjectCard from "./project-card";
import { Link } from "react-router";

const projects: Project[] = projectsData;

function FeaturedProjects() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col pt-6 gap-6 mx-6 max-w-6xl md:flex-row xl:mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Link to="/projects" className="mt-3 block text-lg underline text-primary hover:text-secondary-foreground"> View all projects</Link>
    </section>
  )
}
export default FeaturedProjects;
