import * as React from "react";
import Link from "gatsby-link";

const Component: React.FC = ({ to, icon, title, children }) => (
  <li>
    <Link to={to} className="nav-link" activeClassName="active">
      <i className={"fa fa-" + icon} /> {title} {children}
    </Link>
  </li>
);

export default Component;
