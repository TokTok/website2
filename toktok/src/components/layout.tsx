import * as React from "react";
import Link from "gatsby-link";
import NavBar from "./nav/bar.tsx";
import NavLink from "./nav/link.tsx";
import Helmet from "react-helmet";

import "bootstrap";

import "../styles/index.css";

const DefaultLayout: React.FC = ({ children }) => (
  <div>
    <Helmet
      title="Tox - Safe as a whisper"
      meta={[
        {
          name: "description",
          content:
            "Whether it's corporations or governments, there's just too much digital " +
            "spying going on today. Tox is an easy to use application that connects " +
            "you with friends and family without anyone else listening in. While other " +
            "big-name services require you to pay for features, Tox is totally free and " +
            "comes without advertising &mdash; forever.",
        },
        {
          name: "keywords",
          content: "tox, security, messaging, messenger, videochat, chat",
        },
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
      <NavBar>
        <NavLink to="/download/" icon="download" title="Download" />
        <NavLink to="/features/" icon="list-ul" title="Features" />
        <NavLink to="/about/" icon="align-left" title="About Us" />
        <NavLink to="/blog/" icon="rss" title="Blog" />
        <NavLink to="/clients/" icon="lock" title="Clients" />
        <NavLink to="/faqs/" icon="info-circle" title="FAQs" />
        <NavLink to="/contact/" icon="envelope" title="Contact" />
      </NavBar>
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
