import { useState } from 'react'
import logo from '../../assets/logo.svg'
import { Layout } from '../../layouts/Layout'
import styles from './Top.module.css'

export const Top = () => {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <div className={styles.App}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className={styles['App-link']}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className={styles['App-link']}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </div>
    </Layout>
  )
}
