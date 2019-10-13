import { Link } from "gatsby"
import * as React from "react"

interface HeaderProps {
  siteTitle: string
}

const Header: React.FunctionComponent<HeaderProps> = props => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {props.siteTitle}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" activeClassName="active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/page2" className="nav-link" activeClassName="active">
                Second page
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
