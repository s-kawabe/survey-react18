import { Link } from 'react-location'
import styles from './NavBar.module.css'

export const NavBar = () => {
  return (
    <nav>
      <ul className={styles.navs}>
        <li className={styles.link}>
          <Link to="/">Top</Link>
        </li>
        <li className={styles.link}>
          <Link to="/automaticBatching">Automatic Batching</Link>
        </li>
        <li className={styles.link}>
          <Link to="/promise">Promise</Link>
        </li>
        <li className={styles.link}>
          <Link to="/suspense">Suspense</Link>
        </li>
        <li className={styles.link}>
          <Link to="/nestedSuspense">NestedSuspense</Link>
        </li>
        <li className={styles.link}>
          <Link to="/transition">startTransition/useTransition</Link>
        </li>
        <li className={styles.link}>
          <Link to="/useDeferredValue">useDefferedValue</Link>
        </li>
        <li className={styles.link}>
          <Link to="/useId">useId</Link>
        </li>
      </ul>
    </nav>
  )
}
