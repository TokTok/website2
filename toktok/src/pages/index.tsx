import * as React from "react";
import Link from "gatsby-link";
import Layout from "../components/layout/main.tsx";

import About from "../components/content/about.tsx";
import Features from "../components/content/features.tsx";

const Page = () => (
  <Layout>
    <section id="home" className="cd-hero js-cd-hero">
      <div className="cd-hero__slider">
        <div className="cd-hero__slide js-cd-slide">
          <div className="cd-hero__content cd-hero__content">
            <h2>Communicate, safe as a whisper.</h2>
            <p>
              Tox puts you in touch with friends and family, with video chats
              and text messages, as safely as whispering in person.
            </p>
            <Link to="/download/" className="hvr-bounce-to-right cd-hero__btn">
              <i className="fa fa-laptop"></i>
              Get Tox
            </Link>
            <Link
              to="/download/android/"
              className="hvr-bounce-to-right cd-hero__btn cd-hero__btn--secondary"
            >
              <i className="fa fa-android"></i>
              Get the App
            </Link>

            <div className="cd-hero__content--img">
              <img
                src="/uploads/qtox.png"
                className="img-fluid"
                alt="qTox on a Mac"
              />
            </div>
          </div>

          <div className="cd-hero__content cd-hero__content cd-hero__content--img">
            <img
              src="/uploads/app_iphone_01.png"
              className="img-fluid"
              alt="Tox on a phone"
            />
          </div>
        </div>
      </div>
    </section>

    <Features />
    <About />
  </Layout>
);

export default Page;
