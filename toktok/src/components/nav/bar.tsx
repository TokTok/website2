import * as React from "react";
import Link from "gatsby-link";

const Component: React.FC = ({ children }) => (
  <nav className="navbar header-nav navbar-expand-lg">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img
          src="/images/logos/logo.svg"
          alt="image"
          style={{ height: "49px" }}
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarApp"
        aria-controls="navbarApp"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarApp"
      >
        <ul className="navbar-nav">{children}</ul>
      </div>
    </div>
  </nav>
);

export default Component;
