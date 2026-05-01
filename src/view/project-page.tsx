import { Project } from "@/model/project";
import { URL } from "url";


export default function ProjectPage(project: Project) {
  return <main>
    <p>{ project.name }</p>
    { RepoLink(project.repo) }
    <p>{ project.description }</p>
  </main>
}

function RepoLink(repo: URL) {
  return <p><a href={ repo.href }>{ repo.pathname }</a></p>
}
