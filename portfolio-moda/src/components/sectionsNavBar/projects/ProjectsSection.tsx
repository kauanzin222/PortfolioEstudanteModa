import { projects } from "../../../data/project";
import Project from "./Project";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="px-6 pt-24 font-display text-5xl md:px-12">
        Projetos
      </h2>

      {projects.map((project, index) => (
        <Project key={project.slug} project={project} index={index} />
      ))}
    </section>
  )
}