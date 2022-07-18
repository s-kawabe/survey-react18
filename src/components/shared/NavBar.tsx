import { Link } from 'react-location'
import styles from './NavBar.module.css'

export const NavBar = () => {
  return (
    <nav>
      <ul className={styles.navs}>
        <li className={styles.link}>
          <div>
            <Link to="/">Top</Link>
          </div>
        </li>
        <li className={styles.link}>
          <div>
            <Link to="/automaticBatching">Automatic Batching</Link>
          </div>
        </li>
        <li className={styles.link}>
          <div>
            <Link to="/suspense">Suspense</Link>
          </div>
        </li>
        <li className={styles.link}>
          <div>
            <Link to="/nestedSuspense">NestedSuspense</Link>
          </div>
        </li>
        <li className={styles.link}>
          <div>
            <Link to="/transition">startTransition/useTransition</Link>
          </div>
        </li>
        <li className={styles.link}>
          <div>
            <Link to="/useDeferredValue">useDefferedValue</Link>
          </div>
        </li>
        <li className={styles.link}>
          <div>
            <Link to="/useId">useId</Link>
          </div>
        </li>
      </ul>
    </nav>
  )
}
