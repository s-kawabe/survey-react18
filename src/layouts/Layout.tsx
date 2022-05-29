import { ReactNode } from 'react'
import { Link } from 'react-location'
import styles from './Layout.module.css'

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <header>
        <nav>
          <ul className={styles.navs}>
            <li className={styles.link}>
              <Link to="/">Top</Link>
            </li>
            <li className={styles.link}>
              <Link to="/automaticBatching">Automatic Batching</Link>
            </li>
            <li className={styles.link}>
              <Link to="/useTransition">useTransition</Link>
            </li>
            <li className={styles.link}>
              <Link to="/useDeferredValue">useDefferedValue</Link>
            </li>
            <li className={styles.link}>
              <Link to="/useId">useId</Link>
            </li>
            <li className={styles.link}>
              <Link to="/">Top</Link>
            </li>
            <li className={styles.link}>
              <Link to="/automaticBatching">Automatic Batching</Link>
            </li>
            <li className={styles.link}>
              <Link to="/useTransition">useTransition</Link>
            </li>
            <li className={styles.link}>
              <Link to="/useDeferredValue">useDefferedValue</Link>
            </li>
            <li className={styles.link}>
              <Link to="/useId">useId</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.content}>
        <h1>React 18 Survey 🤔</h1>
        {props.children}
      </main>
    </>
  )
}
