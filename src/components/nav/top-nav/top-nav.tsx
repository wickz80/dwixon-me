import * as React from "react";
import "./styles.scss";
import { Favicon } from "../../common/favicon";
import { NavItem } from "./nav-item";
// tslint:disable-next-line
const logo = require("src/icons/android-chrome-192x192.png");
const li = require("src/icons/linkedin.png");
const gh = require("src/icons/github.png");

const TopNav: React.FunctionComponent = () => (
  <header>
    <nav id="main-nav">
      <div className="container mx-0 nav-container">
        <Favicon />
        <div className="row mx-0 nav-row">
          <div className="col-1 pl-0">
            <img src={logo} className="navbar-icon" />
          </div>

          <span className="col-5 align-self-center">
            <NavItem path="/" name="home" />
            <NavItem path="/about" name="about" />
            <NavItem path="/archive" name="archive" />
            <NavItem path="/spotify" name="spotify" out={true} />
          </span>

          <div className="col" />

          <div className="navbar-icon-links px-0 col-2">
            <a href="https://www.linkedin.com/in/david-wixon/">
              <img src={li} className="navbar-icon ext" />
            </a>
            <a href="https://github.com/wickz80">
              <img src={gh} className="navbar-icon ext" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default TopNav;
