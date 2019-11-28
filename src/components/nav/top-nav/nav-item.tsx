import * as React from "react";
import { Link } from "gatsby";

interface Props {
  name: string;
  path: string;
  out?: boolean;
}

export const NavItem = (props: Props) => (
  <>
    {props.out ? (
      <a className="nav-link" href={props.path}>
        {props.name}
      </a>
    ) : (
      <Link to={props.path} className="nav-link" activeClassName="active">
        {props.name}
      </Link>
    )}
  </>
);
