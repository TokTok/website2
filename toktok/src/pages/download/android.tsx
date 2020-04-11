import * as React from "react";
import Layout from "../../layouts/main";

const Page = () => (
  <Layout>
    <div id="download" className="section noover download-bg">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-md-6 col-sm-12">
            <div className="customwidget text-left">
              <h1>Thanks for downloading!</h1>
              <p>
                Once aTox is on the play store, we'll link to that instead.
              </p>
            </div>
          </div>
          <div className="col-md-6 iphones">
            <div className="text-center image-center">
              <img
                src="/images/iphones.png"
                alt=""
                className="img-fluid wow fadeInUp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Page;
