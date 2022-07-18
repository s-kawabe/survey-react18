import { Suspense } from 'react'
import { FetchTasks } from '../../components/fetch/FetchTasks'
import { FetchUsers } from '../../components/fetch/FetchUsers'
import { Loading } from '../../components/shared/Loading'
import styles from './NestedSuspense.module.css'

export const NestedSuspense = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Nested Suspense</div>

      {/* Suspenseにおいて表示されるfallbackは常に一個だけなので、発生したサスペンドから一番近い親要素のfallbackが常に1つ表示されている状態 */}
      <Suspense
        fallback={
          // 2
          <>
            <p className={styles.outerText}>Showing outer skeleton</p>
            <Loading />
          </>
        }
      >
        <FetchUsers /> {/* 1 */}
        <Suspense
          fallback={
            // 4
            <>
              <p className={styles.innerText}>Showing inner skeleton</p>
              <Loading />
            </>
          }
        >
          <FetchTasks /> {/* 3 */}
        </Suspense>
      </Suspense>
    </div>
  )
}
