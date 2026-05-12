import ProjectView from "@/components/project-view"
import { Project } from "@/model/project"
import styles from '@/app/page.module.css'

export interface List {
  projects: Project[]
}

export default function ProjectList({ projects }: List) {
  return (
    <div className={styles.projectList}>{
      projects.map((project) => {
        return (
          <ProjectView  project={project} key={project.name} />
        )
      })
    }</ div>
  )
}
