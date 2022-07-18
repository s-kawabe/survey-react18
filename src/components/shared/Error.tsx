import erorrSvg from '../../assets/Error.svg'
import styles from './Error.module.css'

export const Loading = () => {
  return (
    <div className={styles.error}>
      <img src={erorrSvg} alt="エラー" width={50} height={50} />
      <p>エラーが発生しました。</p>
    </div>
  )
}
