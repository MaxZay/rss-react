import '../styles/app.css'
import { Content } from './Content'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

export const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active-link">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <Content />
      </div>
    </Router>
  )
}
