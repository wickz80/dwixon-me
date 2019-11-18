import * as React from "react"
import "./styles.scss"
import { Favicon } from "../../common/favicon"
import { NavItem } from "./nav-item"
// tslint:disable-next-line
const logo = require("src/icons/android-chrome-192x192.png")

const TopNav: React.FunctionComponent = () => (
  <header>
    <nav className="navbar navbar-light bg-light" id="main-nav">
      <div className="container">
        <img src={logo} className="navbar-icon" />
        <Favicon />

        <ul
          className="navbar-nav"
          style={{
            marginLeft: "50px",
            flexDirection: "row"
          }}
        >
          <NavItem path="/" name="home" />
          <NavItem path="/about" name="about" />
          <NavItem path="/archive" name="archive" />
          <NavItem path="/spotify" name="spotify" out={true} />
        </ul>
      </div>
    </nav>
  </header>
)

export default TopNav
