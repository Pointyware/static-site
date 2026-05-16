import { About, Contact, Copyright } from "@/components/about-components";
import styles from '@/app/page.module.css';
export default function AboutPage() {

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <About />
        <Contact />
        <Copyright />
      </div>
    </div>
  )
}
