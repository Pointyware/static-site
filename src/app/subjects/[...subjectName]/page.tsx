'use client'

import { useParams } from 'next/navigation'
import styles from '@/app/page.module.css'

/**
 * 
 * @returns 
 */
export default function SubjectPage() {
  const params = useParams<{ subjectName: string[] }>()
  const path = params.subjectName

  return (
    <main className={styles.main}>
      <SubjectView path={path}/>
    </main>
  )
}

export function SubjectView({path}:{path:any}) {
  if (path == undefined) {
    return <p>Undefined</p>
  }
  if (path instanceof Array) {
    return path.map((element)=>{
      return <p key={element}>
        { element }
      </p>
    })
  } else {
    return <p>{ path }</p>
  }
}
