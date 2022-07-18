import { useState, useEffect, useTransition } from 'react'
import axios from 'axios'
import styles from './Transition.module.css'
import { Loading } from '../../components/shared/Loading'

export const Transition = () => {
  const [photos, setPhotos] = useState<any>([])
  const [input, setInput] = useState('') // 見せる用のstate (優先度高)
  const [searchKey, setSearchKey] = useState('') // API request用のstate (優先度低)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios('https://jsonplaceholder.typicode.com/photos')
      setPhotos(res.data)
    }
    fetchData()
  }, [])
  const filteredPhotos = photos.filter((photo: any) => {
    return photo.title.includes(searchKey)
  })
  const updateHandler = (e: any) => {
    // こちらの更新が優先され、文字入力が素早くフィードバックされる
    setInput(e.target.value)
    // 緊急性の低いsearchKeyの更新を遅くする
    startTransition(() => setSearchKey(e.target.value))

    // transitionを使わないと、UIの更新に時間がかかる
    // setSearchKey(e.target.value)
  }
  return (
    <div className={styles.container}>
      <p className={styles.title}>startTransition (concurrent feature)</p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="text" value={input} onChange={updateHandler} />
        {isPending && <p style={{ fontSize: '18px' }}>pending...</p>}
      </div>
      <div className={styles.items}>
        {filteredPhotos.map((photo: any) => (
          <p key={photo.id}>{photo.title}</p>
        ))}
      </div>
    </div>
  )
}
