import styles from "./page.module.css";
import { URL } from "url";
import Welcome from "./_components/welcome";
import ProjectList from "./_components/project-list";
import Footer from "./_components/footer";
import { Project } from "@/model/project";

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

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Welcome />
        <ProjectList projects={projectList}/>
        <Footer />
      </main>
    </div>
  );
}

/*
TODO: transfer head meta info to react format

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pointyware</title>
        <link rel="stylesheet" href="styles.css">
        <script src="script.js"></script>
        <link rel="icon" href="favicon.ico" type="image/x-icon">
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SGSMS8T369"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SGSMS8T369');
</script>

    </head>

*/