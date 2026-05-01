import Image from "next/image";
import styles from "./page.module.css";
import ProjectPage from "@/view/project-page";
import { URL } from "url";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          { ProjectPage({ name: 'someproject', repo: URL.parse('https://github.com/Pointyware/static-site')!, description: 'The main static site source' }) }
        </div>
      </main>
    </div>
  );
}
