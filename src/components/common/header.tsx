import { Link } from "gatsby"
import * as React from "react"

interface HeaderProps {
  siteTitle: string
}

const Header: React.FunctionComponent<HeaderProps> = props => (
  <header>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest"></link>
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
              <Link to="/about" className="nav-link" activeClassName="active">
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/archive" className="nav-link" activeClassName="active">
                archive
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
