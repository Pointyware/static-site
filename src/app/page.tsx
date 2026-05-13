import styles from "./page.module.css";
import ProjectList from "./_components/project-list";
import { Project } from "@/model/project";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ProjectList projects={projectList}/>
      </main>
    </div>
  );
}

const projectList: Project[] = [
  {
    name: 'Cymatics',
    repo: new URL('https://github.com/Pointyware/Cymatics'),
    description: 'Manipulate waveforms\n\nAvailable for Download from the Google Play Store!',
    // <p class="project-promo">Available for Download from the <a href="https://play.google.com/store/apps/details?id=org.pointyware.cymatics">Google Play Store!</a></p>
    page: './cymatics',
  },
  {
    name: 'OpenAds',
    repo: new URL('https://github.com/Pointyware/OpenAds'),
    description: 'Exposing the internal workings of Ad Networks for Business and Consumer transparency and safety!\n\nUnder development on GitHub',
    page: './openads',
  },
  {
    name: 'Painted Dogs',
    repo: new URL('https://github.com/Pointyware/PaintedDogs'),
    description: 'The Collective Action App!\n\nUnder development onGitHub',
    page: './painteddogs',
  },
  {
    name: 'Xyz',
    repo: new URL('https://github.com/Pointyware/Xyz'),
    description: 'Get your X from Y to Z!\n\nUnder development on GitHub',
    page: './xyz',
  }
]
