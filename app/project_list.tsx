import projects from "../public/projects.json"
import ProjectCard from "./project_card";

function ProjectList() {
  return (
    <section className="flex flex-col pt-6 gap-6 mx-6 max-w-6xl md:flex-row xl:mx-auto">
      {projects.map((project) => (
        <ProjectCard key={project.id} name={project.name} short_description={project.short_description} tags={project.tags} call_to_action={project.call_to_action} preview_image_source={project.preview_image_source}  />
      ))}
    </section>
  )
}
export default ProjectList;
