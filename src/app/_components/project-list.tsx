import ProjectView from "@/components/project-view"
import { Project } from "@/model/project"

export interface List {
  projects: Project[]
}

export default function ProjectList({ projects }: List) {

  return projects.map((project) => {
    return <div key={project.name}>
      <ProjectView project={project} />
    </div>
  })
}
