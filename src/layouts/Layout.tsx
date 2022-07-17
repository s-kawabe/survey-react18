import { ReactNode } from 'react'
import { Link } from 'react-location'
import { NavBar } from '../components/shared/NavBar'
import styles from './Layout.module.css'

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className={styles.content}>
        <h1 className={styles.heading}>React 18 Survey 🤔</h1>
        {props.children}
      </main>
    </>
  )
}
