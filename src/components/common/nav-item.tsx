import * as React from "react"
import { Link } from "gatsby"

interface Props {
  name: string
  path: string
}

export const NavItem = (props: Props) => (
  <li className="nav-item" style={{
    padding: "0px 5px 0px 5px"
  }}>
    <Link to={props.path} className="nav-link" activeClassName="active">
      {props.name}
    </Link>
  </li>
)
