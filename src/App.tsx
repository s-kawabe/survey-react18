import { Link, Outlet, ReactLocation, Router } from "react-location"
import { routes } from "./router/Route"
import "./App.css"

const App = () => {
  const location = new ReactLocation()
  return (
    <Router routes={routes} location={location}>
      <div className="container">
        <h1>React 18 Survey 🤔</h1>
        <nav>
          <ul className="navs">
            <li className="link"><Link to="/">Top</Link></li>
            <li className="link"><Link to="/useTransition">useTransition</Link></li>
            <li className="link"><Link to="/useDeferredValue">useDefferedValue</Link></li>
            <li className="link"><Link to="/useId">useId</Link></li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </Router>
  )
}

export default App