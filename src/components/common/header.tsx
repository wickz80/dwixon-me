import * as React from "react"
import "./styles.scss"
import { Favicon } from "./favicon"
import { NavItem } from "./nav-item"

const Header: React.FunctionComponent = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="main-nav">
      <div className="container">
        <img
          src={"./android-chrome-192x192.png"}
          className="navbar-icon"
        />
        <Favicon />

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavItem path="/" name="home" />
            <NavItem path="/about" name="about" />
            <NavItem path="/archive" name="archive" />
          </ul>
        </div>
      </div>
    </nav>
  </header >
)

export default Header
