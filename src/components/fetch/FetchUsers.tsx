import { useQueryUsers } from '../../hooks/useQueryUsers@3s'
import styles from './FetchItem.module.css'

export const FetchUsers = () => {
  const { data } = useQueryUsers()
  return (
    <div className={styles.container}>
      <p className={styles.title}>User List</p>
      {data.map((user: any) => (
        <p className={styles.item} key={user.id}>
          {user.username}
        </p>
      ))}
    </div>
  )
}
