import * as React from "react";

const Component: React.FC = () => (
  <div id="about" className="section wb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <h3>About Tox</h3>
            <p>In the following sections we have way too much text.</p>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-6">
          <div className="about-left">
            <img src="/images/about-01.png" className="img-fluid" alt="" />
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="about-right">
            <h2>Long history</h2>
            <p>Maybe we want to write some stuff here.</p>
          </div>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-lg-5 col-md-6">
          <div className="about-right">
            <h2>Free software</h2>
            <p>Some stuff here too?</p>
          </div>
        </div>
        <div className="col-lg-7 col-md-6">
          <div className="about-left">
            <img src="/images/about-02.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Component;
