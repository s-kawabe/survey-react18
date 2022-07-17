import axios from 'axios'
import { useState } from 'react'
// import { flushSync } from 'react-dom'
import styles from './AutomaticBatching.module.css'

export const AutomaticBatching = () => {
  const [count, setCount] = useState(0)
  const [fetchCount, setFetchCount] = useState(0)
  const [users, setUsers] = useState([])

  const handleClick = () => {
    // ⭐ event handler内でのstate更新は今までもbatch処理が有効だったため以下はレンダリング１回で済んでいた
    // setCount((prev) => prev + 1)
    // setFetchCount((prev) => prev + 1)
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      // ⭐ flushSyncを使うと明示的にbatchをきかせないようにできる
      // flushSync(() => {
      // setUsers(res.data)
      // })
      // flushSync(() => {
      //   setFetchCount((count) => count + 1)
      // })

      // ⭐ Promiseのcallback内でのstate更新にbatchが有効になったのは18以降から。
      setUsers(res.data)
      setFetchCount((fetchCount) => fetchCount + 1)
    })
  }

  console.log('AutomaticBatching.tsx is rendered!')

  return (
    <div className={styles.container}>
      <div className={styles.title}>AutomaticBatching</div>
      <div className={styles.count}>{fetchCount}</div>
      <button onClick={handleClick}>count</button>
    </div>
  )
}
