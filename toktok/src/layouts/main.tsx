import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import NavLink from "../components/Nav/Link";
import Helmet from "react-helmet";

import "../styles/index.scss";

const Layout: React.FC = ({ children }) => (
  <div>
    <Helmet
      title="Tox - Safe as a whisper"
      link={[
        {
          rel: "shortcut icon",
          href: "/images/favicon.ico",
          type: "image/x-icon",
        },
        {
          rel: "apple-touch-icon",
          href: "/images/apple-touch-icon.png",
        },
      ]}
    />

    <header className="header header_style_01 fixed-menu">
      <div className="container">
        <nav className="header-nav navbar navbar-expand-md navbar-light">
          <Link to="/">
            <img
              src="/images/logos/logo.svg"
              alt="image"
              style={{ height: "49px" }}
            />
          </Link>
          <a
            href="#responsive-navbar-nav"
            aria-controls="responsive-navbar-nav"
            className="navbar-toggler"
          >
            <span />
            <span />
            <span />
          </a>
          <div
            className="navbar-collapse navbar-nav collapse justify-content-end"
            id="responsive-navbar-nav"
          >
            <NavLink to="/download/" icon="download" title="Download" />
            <NavLink to="/about/" icon="align-left" title="About" />
            <NavLink
              to="/contributing/"
              icon="sign-language"
              title="Contributing"
            />
            <NavLink to="/blog/" icon="rss" title="Blog" />
            <NavLink to="/faqs/" icon="info-circle" title="FAQs" />
            <a href="#close" className="close-overlay"></a>
          </div>
        </nav>
      </div>
    </header>

    {children}

    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="ext-med col">
            <a
              className="button"
              href="https://twitter.com/projecttox"
              title="Follow us on Twitter"
            >
              <span className="icon fa fa-twitter"></span>
            </a>
            <a
              className="button"
              href="https://facebook.com/toxproject"
              title="Like us on Facebook"
            >
              <span className="icon fa fa-facebook"></span>
            </a>
            <a
              className="button"
              href="https://reddit.com/r/projecttox"
              title="Join discussions on Reddit"
            >
              <span className="icon fa fa-reddit"></span>
            </a>
            <a
              className="button"
              href="https://github.com/TokTok/c-toxcore"
              title="Star us on Github"
            >
              <span className="icon fa fa-github"></span>
            </a>
            <a
              className="button"
              href="https://wiki.tox.chat/users/community#irc"
              title="Chat with us on IRC"
            >
              <span className="icon fa fa-comments"></span>
            </a>
            <a
              className="button do-button"
              href="https://www.digitalocean.com/"
              title="Powered by DigitalOcean"
            >
              <img className="button" src="/images/logos/do.svg" />
            </a>
          </div>

          <div className="cc col">
            <a href="http://creativecommons.org/licenses/by-sa/4.0/">
              <img src="/images/CC.png" />
            </a>
            <br />
            <p>
              This page was generated from{" "}
              <a href="https://github.com/TokTok/website">
                a file hosted in public GitHub repository
              </a>{" "}
              — issue tickets and pull requests are very welcome!
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Layout;
