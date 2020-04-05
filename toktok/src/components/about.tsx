import * as React from "react";
import Link from "gatsby-link";

const About = () => (
  <div id="about" className="section wb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <h3>About Us</h3>
            <p>
              Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean
              sollicitudin, lorem quis bibendum
              <br />
              auctor nisi elit consequat ipsum, nec sagittis sem!
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-6">
          <div className="about-left">
            <img src="/uploads/about-01.png" className="img-fluid" alt="" />
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="about-right">
            <h2>Easy customization </h2>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem."
            </p>
          </div>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-lg-5 col-md-6">
          <div className="about-right">
            <h2>Get started </h2>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem."
            </p>
          </div>
        </div>
        <div className="col-lg-7 col-md-6">
          <div className="about-left">
            <img src="/uploads/about-02.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
