import { useQueryComments } from '../../hooks/useQueryComments@1s'
import styles from './FetchItem.module.css'

export const FetchComments = () => {
  const { data } = useQueryComments()
  return (
    <div className={styles.container}>
      <p className={styles.title}>Comment List</p>
      {data.map((comment: any) => (
        <p className={styles.item} key={comment.id}>
          {comment.name}
        </p>
      ))}
    </div>
  )
}
