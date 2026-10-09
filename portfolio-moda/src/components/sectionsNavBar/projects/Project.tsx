import ProjectCarousel from "./ProjectCarousel";
import type { Project } from "../../../data/project";

type Props = { project: Project; index: number }

export default function Project({ project, index }: Props) {
  const { slug, title, year, description, slides } = project

  return (
    <article
      id={`project-${slug}`}
      className="flex min-h-screen scroll-mt-20 flex-col items-center justify-center gap-8 px-6 py-24 md:px-12"
    >
      <header className="max-w-xl text-center">
        <p className="font-support text-xs uppercase tracking-[0.2em] text-nude/70">
          {String(index + 1).padStart(2, '0')} — {year}
        </p>
        <h3 className="mt-2 font-display text-4xl text-camel">{title}</h3>
        <p className="mt-4 text-lg text-nude/80 font-medium">{description}</p>
      </header>

      <ProjectCarousel slides={slides} title={title} />
    </article>
  )
}