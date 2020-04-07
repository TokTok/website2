import * as React from "react";
import Layout from "../components/layout/main.tsx";

const Page = () => (
  <Layout>
    <div id="contact" className="section lb">
      <div className="container">
        <div className="section-title text-center">
          <h3>Get in Touch</h3>
          <div
            className="info-box"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          >
            <i className="fa fa-question-circle" aria-hidden="true"></i>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="contact_form">
              <div id="message"></div>
              <form
                id="contactform"
                className="row"
                action="contact.php"
                name="contactform"
                method="post"
              >
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="form-control"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <textarea
                      className="form-control"
                      name="comments"
                      id="comments"
                      rows="6"
                      placeholder="Give us more details.."
                    ></textarea>
                  </div>
                  <div className="text-center pdi">
                    <button
                      type="submit"
                      value="SEND"
                      id="submit"
                      className="hvr-bounce-to-right get-btn"
                    >
                      Get a Quote
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Page;
