import erorrSvg from '../../assets/error.svg'
import styles from './ErrorMessage.module.css'

export const ErrorMessage = () => {
  return (
    <div className={styles.error}>
      <img src={erorrSvg} alt="エラー" width={40} height={40} />
      <p>エラーが発生しました。</p>
    </div>
  )
}
