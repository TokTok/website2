import * as React from "react";
import Layout from "../components/layout.tsx";

const Page = () => (
  <Layout>
    <div id="pricing" className="section lb">
      <div className="container">
        <div className="section-title text-center">
          <h3>Pricing</h3>
          <p>
            Get the red carpet treatment <strong>just $39 per month!</strong> It
            is estimated that 3.5 million established by personal blogs.
            <br /> From each other, we share paid WordPress themes WP Service...
          </p>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="pricingTable">
              <div className="price-value">
                $10
                <span className="month">monthly</span>
              </div>
              <h3 className="title">Standard</h3>
              <ul className="pricing-content">
                <li>50 GB Disk Space</li>
                <li>50 Email Accounts</li>
                <li>50 GB Monthly Bandwidth</li>
                <li>10 Subdomains</li>
                <li>15 Domains</li>
              </ul>
              <a href="#" className="pricingTable-signup hvr-bounce-to-right">
                Sign Up
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="pricingTable active">
              <div className="price-value">
                $20
                <span className="month">monthly</span>
              </div>
              <h3 className="title">Business</h3>
              <ul className="pricing-content">
                <li>60 GB Disk Space</li>
                <li>60 Email Accounts</li>
                <li>60 GB Monthly Bandwidth</li>
                <li>15 Subdomains</li>
                <li>20 Domains</li>
              </ul>
              <a href="#" className="pricingTable-signup hvr-bounce-to-right">
                Sign Up
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="pricingTable">
              <div className="price-value">
                $30
                <span className="month">monthly</span>
              </div>
              <h3 className="title">Premium</h3>
              <ul className="pricing-content">
                <li>70 GB Disk Space</li>
                <li>70 Email Accounts</li>
                <li>70 GB Monthly Bandwidth</li>
                <li>20 Subdomains</li>
                <li>25 Domains</li>
              </ul>
              <a href="#" className="pricingTable-signup hvr-bounce-to-right">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Page;
