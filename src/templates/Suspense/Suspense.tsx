import { ErrorBoundary } from 'react-error-boundary'
import { ErrorMessage } from '../../components/shared/ErrorMessage'
import { Suspense } from 'react'
import styles from './Suspense.module.css'
import { Loading } from '../../components/shared/Loading'
import { FetchUsers } from '../../components/fetch/FetchUsers'
import { FetchTasks } from '../../components/fetch/FetchTasks'
import { FetchComments } from '../../components/fetch/FetchComments'

export const SuspenseDemo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Suspense</div>

      {/* useQueryXXXs のfetchでerrorを起こすとErrorBoundaryのfallbackが表示されます */}
      <ErrorBoundary fallback={<ErrorMessage />}>
        {/* 子component内でPromiseがthrowされるとSuspenseのfallbackが表示されます */}
        <Suspense fallback={<Loading />}>
          <FetchUsers />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<ErrorMessage />}>
        <Suspense fallback={<Loading />}>
          <FetchTasks />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<ErrorMessage />}>
        <Suspense fallback={<Loading />}>
          <FetchComments />
        </Suspense>
      </ErrorBoundary>

      {/* 全てのサスペンド状態が完了してからchildrenが表示されます */}
      <h3>All in one suspense</h3>
      <Suspense fallback={<Loading />}>
        <FetchUsers />
        <FetchTasks />
        <FetchComments />
      </Suspense>
    </div>
  )
}
