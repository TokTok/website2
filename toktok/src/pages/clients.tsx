import * as React from "react";
import Layout from "../components/layout.tsx";

const Page = () => (
  <Layout>
    <div id="clients" className="section wb">
      <div className="container">
        <div className="section-title text-center">
          <h3>Happy Clients</h3>
          <p className="lead">
            We thanks for all our awesome testimonials! There are hundreds of
            our happy customers! <br />
            Let's see what others say about Appfast website template!
          </p>
        </div>

        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="offset-md-2 col-md-8 ">
              <div className="testi-carousel owl-carousel owl-theme">
                <div className="testimonial">
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus molestie, justo nec convallis sollicitudin, sapien
                    lorem dictum lacus, non consequat odio ipsum nec est. Sed
                    mattis egestas elementum. Nulla facilisi. Quisque placerat
                    risus ac nunc ornare tincidunt. Sed quis faucibus nunc.
                    Pellentesque accumsan arcu mi, eget venenatis mauris.
                  </p>
                  <h3 className="title">williamson</h3>
                  <span className="post">Web Developer</span>
                </div>

                <div className="testimonial">
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus molestie, justo nec convallis sollicitudin, sapien
                    lorem dictum lacus, non consequat odio ipsum nec est. Sed
                    mattis egestas elementum. Nulla facilisi. Quisque placerat
                    risus ac nunc ornare tincidunt. Sed quis faucibus nunc.
                    Pellentesque accumsan arcu mi, eget venenatis mauris.
                  </p>
                  <h3 className="title">Kristina</h3>
                  <span className="post">Web Designer</span>
                </div>

                <div className="testimonial">
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus molestie, justo nec convallis sollicitudin, sapien
                    lorem dictum lacus, non consequat odio ipsum nec est. Sed
                    mattis egestas elementum. Nulla facilisi. Quisque placerat
                    risus ac nunc ornare tincidunt. Sed quis faucibus nunc.
                    Pellentesque accumsan arcu mi, eget venenatis mauris.
                  </p>
                  <h3 className="title">Miranda Joy</h3>
                  <span className="post">Web Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Page;
