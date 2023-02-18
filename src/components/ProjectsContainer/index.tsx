import { ProjectCard } from "@components/ProjectCard"
import { Project, ProjectsContainerProps } from "@types"

export function ProjectsContainer(props: ProjectsContainerProps): JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {props.projects.map((project: Project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  )
}
