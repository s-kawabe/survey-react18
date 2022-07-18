import { Outlet, ReactLocation, Router } from 'react-location'
import { routes } from './routes/Routes'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Layout } from './layouts/Layout'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true, // react-queryでSuspenseを有効にする (componentでerrorやloadingを見なくて良い)
    },
  },
})

const App = () => {
  const location = new ReactLocation()
  // mount→unmount→mount という流れでcomponentのライフサイクルが発生するため以下は２回表示される
  // console.log('test')
  return (
    <QueryClientProvider client={queryClient}>
      <Router routes={routes} location={location}>
        <div className="container">
          <Layout>
            <Outlet />
          </Layout>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
