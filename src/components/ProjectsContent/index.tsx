import { ProjectsContainer } from "@components/ProjectsContainer"
import { GlobalContext } from "@contexts/GlobalContext"
import * as React from "react"

export function ProjectsContent(): JSX.Element {
  const { projects } = React.useContext(GlobalContext)
  return <ProjectsContainer projects={projects} />
}
