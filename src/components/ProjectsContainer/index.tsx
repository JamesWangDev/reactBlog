import { ProjectCard } from "@components/ProjectCard"
import { Project, ProjectsContainerProps } from "@types"

export function ProjectsContainer(props: ProjectsContainerProps): JSX.Element {
  return (
    <div className="w-full min-h-max grid grid-cols-1 lg:grid-cols-2 gap-8 my-2 py-4">
      {props.projects.map((project: Project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  )
}
