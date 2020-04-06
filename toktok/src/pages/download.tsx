import * as React from "react";
import Layout from "../components/layout.tsx";

const Page = () => (
  <Layout>
    <div id="download" className="section noover download-bg">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-md-6 col-sm-12">
            <div className="customwidget text-left">
              <h1>Download Start</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
                felis rhoncus, ultrices dolor quis, faucibus velit. Interdum et
                malesuada fames ac ante ipsum primis in faucibus.
              </p>
            </div>
          </div>
          <div className="col-md-6 iphones">
            <div className="text-center image-center">
              <img
                src="https://tox.chat/theme/img/plat/mac.svg"
                alt=""
                className="img-fluid wow fadeInUp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="download-icons">
      <div className="box-icon">
        <div className="btn-buy apple-button">
          <a href="#">
            <i className="flaticon-android"></i> Download on{" "}
            <strong>Google Play</strong>
          </a>
        </div>
        <div className="btn-buy apple-button">
          <a href="#">
            <i className="flaticon-apple"></i> Download on the{" "}
            <strong>App Store</strong>
          </a>
        </div>
        <div className="btn-buy apple-button">
          <a href="#">
            <i className="flaticon-windows"></i> Download on the{" "}
            <strong>Windows Store</strong>
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default Page;
