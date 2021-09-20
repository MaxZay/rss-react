import '../styles/app.css'
import { Content } from './Content'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Content />
      </div>
    </Router>
  )
}
