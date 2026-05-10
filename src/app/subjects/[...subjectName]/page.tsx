
import { useRouter } from 'next/router'

/**
 * 
 * @returns 
 */
export default function SubjectPage() {
  const router = useRouter()
  const path = router.query.subjectName
  if (path == undefined) {
    return <p>Undefined</p>
  }
  if (path instanceof Array) {
    return path.map((element)=>{
      return <p>
        { element }
      </p>
    })
  } else {
    return <p>{ path }</p>
  }
}
