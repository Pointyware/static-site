import styles from '@/app/page.module.css'
import type { Project } from "@/model/project";

export interface ProjectViewModel {
  project: Project
}

export default function ProjectView({project}:ProjectViewModel) {

  

  return <div className={styles.projectCard}>
      <h4 className={styles.projectName}>{ project.name }</h4>
      <p className={styles.projectDesc}>{ project.description }</p>
      <p className={styles.projectDesc}>{ project.page }</p>
      <p className={styles.ctas}>Under development on <a href={ project.repo.toString() }>GitHub</a></p>
  </div>
}
