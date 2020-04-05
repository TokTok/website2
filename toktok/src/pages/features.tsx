import * as React from "react";
import Layout from "../components/layout.tsx";

const FeaturesPage = () => (
  <Layout>
    <div id="features" className="section lb">
      <div className="container">
        <div className="section-title text-center">
          <h3>The App Features</h3>
          <p className="lead">
            Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem quis bibendum
            <br />
            auctor nisi elit consequat ipsum, nec sagittis sem!
          </p>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="services-inner-box">
              <div className="ser-icon">
                <i className="flaticon-new-file effect-1"></i>
              </div>
              <h2>Easy to Customize</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-inner-box">
              <div className="ser-icon">
                <i className="flaticon-price-tag effect-1"></i>
              </div>
              <h2>eCommerce Ready</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-inner-box">
              <div className="ser-icon">
                <i className="flaticon-windows effect-1"></i>
              </div>
              <h2>Browser Compatible</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-inner-box">
              <div className="ser-icon">
                <i className="flaticon-wordpress-logo effect-1"></i>
              </div>
              <h2>WordPress Installation</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-inner-box">
              <div className="ser-icon">
                <i className="flaticon-pantone effect-1"></i>
              </div>
              <h2>Limitless Colors</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-inner-box">
              <div className="ser-icon">
                <i className="flaticon-cloud-computing effect-1"></i>
              </div>
              <h2>Lifetime Update</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="how-it-works clearfix">
        <div className="hc colon1">
          <h2>1</h2>
          <h3>Go App Store</h3>
          <p>
            Lorem Ipsum dolroin gravida nibh vel velit aliquet. Aenean
            sollicitudin, lorem quis bibendum..
          </p>
        </div>

        <div className="hc colon2">
          <h2>2</h2>
          <h3>Create an Account</h3>
          <p>
            Lorem Ipsum dolroin gravida nibh vel velit aliquet. Aenean
            sollicitudin, lorem quis bibendum..
          </p>
        </div>

        <div className="hc colon3">
          <h2>3</h2>
          <h3>Download the App</h3>
          <p>
            Lorem Ipsum dolroin gravida nibh vel velit aliquet. Aenean
            sollicitudin, lorem quis bibendum..
          </p>
        </div>

        <div className="hc colon4">
          <h2>4</h2>
          <h3>Enjoy &amp; Rate us!</h3>
          <p>
            Lorem Ipsum dolroin gravida nibh vel velit aliquet. Aenean
            sollicitudin, lorem quis bibendum..
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default FeaturesPage;
