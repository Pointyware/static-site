
import styles from '@/app/page.module.css'
import { SubjectView } from "@/components/subject-view"

export default function PoliticsPage() {

  return (
    <main className={styles.main}>
      <SubjectView path={['science','politics']}>
    </main>
  )
}
