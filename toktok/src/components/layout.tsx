import * as React from "react";
import NavLink from "./navlink.tsx";
import Helmet from "react-helmet";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "../styles/index.css";

const DefaultLayout: React.FC = ({ children }) => (
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
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="/">
            <img
              src="/images/logos/logo.svg"
              alt="image"
              style={{ height: "49px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span />
            <span />
            <span />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <NavLink to="/download/" icon="download" title="Download" />
              <NavLink to="/features/" icon="list-ul" title="Features" />
              <NavLink to="/about/" icon="align-left" title="About" />
              <NavLink to="/blog/" icon="rss" title="Blog" />
              <NavLink to="/clients/" icon="lock" title="Clients" />
              <NavLink to="/faqs/" icon="info-circle" title="FAQs" />
              <NavLink to="/contact/" icon="envelope" title="Contact" />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
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

    <div className="copyrights">
      <div className="container">
        <div className="footer-distributed">
          <div className="footer-left">
            <p className="footer-company-name">
              Design by: <a href="https://html.design/">html design</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DefaultLayout;
