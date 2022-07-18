import { useQueryTasks } from '../../hooks/useQueryTasks@5s'
import styles from './FetchItem.module.css'

export const FetchTasks = () => {
  const { data } = useQueryTasks()
  return (
    <div className={styles.container}>
      <p className={styles.title}>Task List 5s</p>
      {data.map((task: any) => (
        <p className={styles.item} key={task.id}>
          {task.title}
        </p>
      ))}
    </div>
  )
}
