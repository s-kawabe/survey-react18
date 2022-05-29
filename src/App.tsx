import { Link, Outlet, ReactLocation, Router } from 'react-location'
import { routes } from './router/Route'
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
          <nav>
            <ul className="navs">
              <li className="link">
                <Link to="/">Top</Link>
              </li>
              <li className="link">
                <Link to="/automaticBatching">Automatic Batching</Link>
              </li>
              <li className="link">
                <Link to="/useTransition">useTransition</Link>
              </li>
              <li className="link">
                <Link to="/useDeferredValue">useDefferedValue</Link>
              </li>
              <li className="link">
                <Link to="/useId">useId</Link>
              </li>
            </ul>
          </nav>
          <h1>React 18 Survey 🤔</h1>
          <Outlet />
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
