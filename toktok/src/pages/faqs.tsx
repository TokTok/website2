import * as React from "react";
import Layout from "../components/layout.tsx";

const FaqsPage = () => (
  <Layout>
    <div id="faqs" className="section lb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <a
                      href=""
                      className="btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is the Start App ?
                    </a>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent nisl lorem, dictum id pellentesque at, vestibulum
                    ut arcu. Curabitur erat libero, egestas eu tincidunt ac,
                    rutrum ac justo. Vivamus condimentum laoreet lectus, blandit
                    posuere tortor aliquam vitae. Curabitur molestie eros.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <a
                      href=""
                      className="btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How to install this app ?
                    </a>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent nisl lorem, dictum id pellentesque at, vestibulum
                    ut arcu. Curabitur erat libero, egestas eu tincidunt ac,
                    rutrum ac justo. Vivamus condimentum laoreet lectus, blandit
                    posuere tortor aliquam vitae. Curabitur molestie eros.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <a
                      href=""
                      className="btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Lorem ipsum dolor sit amet
                    </a>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent nisl lorem, dictum id pellentesque at, vestibulum
                    ut arcu. Curabitur erat libero, egestas eu tincidunt ac,
                    rutrum ac justo. Vivamus condimentum laoreet lectus, blandit
                    posuere tortor aliquam vitae. Curabitur molestie eros.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="faq-right">
              <img src="/uploads/about-02.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default FaqsPage;
