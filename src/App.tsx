import { Outlet, ReactLocation, Router } from 'react-location'
import { routes } from './routes/Routes'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
})

const App = () => {
  const location = new ReactLocation()
  return (
    <QueryClientProvider client={queryClient}>
      <Router routes={routes} location={location}>
        <div className="container">
          <Outlet />
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
