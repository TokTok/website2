import * as React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

//import 'bootstrap';

import "../styles/index.css";

const DefaultLayout: React.FC = ({ children }) => (
  <div>
    <Helmet
      title="Tox - Safe as a whisper"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
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
            <ul className="navbar-nav">
              <li>
                <Link
                  to="/about/"
                  className="nav-link"
                  activeClassName="active"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/features/"
                  className="nav-link"
                  activeClassName="active"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/download/"
                  className="nav-link"
                  activeClassName="active"
                >
                  Download
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing/"
                  className="nav-link"
                  activeClassName="active"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/clients/"
                  className="nav-link"
                  activeClassName="active"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link to="/faqs/" className="nav-link" activeClassName="active">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact/"
                  className="nav-link"
                  activeClassName="active"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    {children}

    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="subscribe-text">
              <h3>Subscribe for Newsletter</h3>
              <p>
                Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor
                sit amet, consectetur adipisicing incididunt.
              </p>
            </div>

            <div className="footer-links">
              <a href="#">Hehe</a>
            </div>
            <div className="subscribe-form">
              <form>
                <input
                  className="form-control"
                  id="subscribe_email"
                  name="email"
                  placeholder="Email Address..."
                  required=""
                  type="email"
                />
                <button type="submit" className="btn subscribe-btn">
                  <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <div class="copyrights">
      <div class="container">
        <div class="footer-distributed">
          <div class="footer-left">
            <p class="footer-company-name">
              Design by: <a href="https://html.design/">html design</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DefaultLayout;
