import * as React from "react";
import Layout from "../components/layout.tsx";

const ContactPage = () => (
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
    <div id="team" className="section wb">
      <div className="container">
        <div className="section-title text-center">
          <h3>The Dev Team</h3>
          <p className="lead">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, true generator
            <br /> on the Internet. It uses a dictionary of over..
          </p>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="our-team">
              <div className="team_img">
                <img src="/uploads/team_01.jpg" />
                <ul className="social">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="team-content">
                <h3 className="title">Williamson</h3>
                <span className="post">Founder & CEO</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typeseing
                  industry
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="our-team">
              <div className="team_img">
                <img src="/uploads/team_02.jpg" />
                <ul className="social">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="team-content">
                <h3 className="title">kristina</h3>
                <span className="post">UI Designer</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typeseing
                  industry
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="our-team">
              <div className="team_img">
                <img src="/uploads/team_03.jpg" />
                <ul className="social">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="team-content">
                <h3 className="title">Steve Thomas</h3>
                <span className="post">Chief Developer</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typeseing
                  industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="parallax section stats-box"
      style={{ backgroundImage: "url('/uploads/ben_img_2.jpg')" }}
    >
      <div className="container">
        <div className="row text-left stat-wrap">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="text-center">
              <span data-scroll className="global-radius icon_wrap effect-1">
                <i className="flaticon-apple"></i>
              </span>
              <p className="stat_count_download">12500</p>
              <h3>App Store</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="text-center">
              <span data-scroll className="global-radius icon_wrap effect-1">
                <i className="flaticon-amazon-logo"></i>
              </span>
              <p className="stat_count_download">31000</p>
              <h3>Amazon</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="text-center">
              <span data-scroll className="global-radius icon_wrap effect-1">
                <i className="flaticon-android"></i>
              </span>
              <p className="stat_count_download">15788</p>
              <h3>Google Play</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="text-center">
              <span data-scroll className="global-radius icon_wrap effect-1">
                <i className="flaticon-windows"></i>
              </span>
              <p className="stat_count_download">21000</p>
              <h3>Windows App</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ContactPage;
