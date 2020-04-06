import * as React from "react";
import Layout from "../components/layout.tsx";
import Link from "gatsby-link";

const Page = () => (
  <Layout>
    <div id="faqs" className="section lb">
      <div className="container">
        <div class="section-title text-center">
          <h3>Technical FAQ</h3>
          <h5>
            <Link to="/faqs/">(go to user FAQ)</Link>
          </h5>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="tox-central-servers">
                  <h5 className="mb-0">
                    <a
                      href=""
                      className="btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse-tox-central-servers"
                      aria-expanded="true"
                      aria-controls="collapse-tox-central-servers"
                    >
                      Does Tox rely on central servers?
                    </a>
                  </h5>
                </div>
                <div
                  id="collapse-tox-central-servers"
                  className="collapse show"
                  aria-labelledby="tox-central-servers"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    No. That said, in some situations a client will choose to
                    use{" "}
                    <a href="https://nodes.tox.chat/">
                      publicly listed bootstrap nodes
                    </a>{" "}
                    to find their way into the DHT.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="tox-encryption-algorithm">
                  <h5 className="mb-0">
                    <a
                      href=""
                      className="btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse-tox-encryption-algorithm"
                      aria-expanded="false"
                      aria-controls="collapse-tox-encryption-algorithm"
                    >
                      Which encryption algorithms are used?
                    </a>
                  </h5>
                </div>
                <div
                  id="collapse-tox-encryption-algorithm"
                  className="collapse show"
                  aria-labelledby="tox-encryption-algorithm"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Tox uses the cryptographic primitives present in the{" "}
                    <a href="http://nacl.cr.yp.to/index.html">
                      NaCl crypto library
                    </a>
                    . Specifically, Tox employs{" "}
                    <a href="https://en.wikipedia.org/wiki/Curve25519">
                      curve25519
                    </a>{" "}
                    for its key exchanges,{" "}
                    <a href="https://download.libsodium.org/doc/advanced/xsalsa20.html">
                      xsalsa20
                    </a>{" "}
                    for symmetric encryption, and{" "}
                    <a href="https://en.wikipedia.org/wiki/Poly1305">
                      poly1305
                    </a>{" "}
                    for MACs. Clients use the{" "}
                    <a href="https://github.com/jedisct1/libsodium">
                      libsodium
                    </a>{" "}
                    implementation of these algorithms.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="bootstrap-node-list">
                  <h5 className="mb-0">
                    <a
                      href=""
                      className="btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse-bootstrap-node-list"
                      aria-expanded="false"
                      aria-controls="collapse-bootstrap-node-list"
                    >
                      Where are public DHT bootstrap nodes?
                    </a>
                  </h5>
                </div>
                <div
                  id="collapse-bootstrap-node-list"
                  className="collapse show"
                  aria-labelledby="bootstrap-node-list"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Check out our{" "}
                    <a href="https://nodes.tox.chat/">public nodes list</a> for
                    an updated list, including{" "}
                    <a href="https://nodes.tox.chat/json">
                      machine-readable JSON output
                    </a>
                    .
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="tox-av-used">
                  <h5 className="mb-0">
                    <a
                      href=""
                      className="btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse-tox-av-used"
                      aria-expanded="false"
                      aria-controls="collapse-tox-av-used"
                    >
                      What codecs are used for A/V?
                    </a>
                  </h5>
                </div>
                <div
                  id="collapse-tox-av-used"
                  className="collapse show"
                  aria-labelledby="tox-av-used"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      <a href="http://opus-codec.org/">Opus</a> for audio, and{" "}
                      <a href="https://en.wikipedia.org/wiki/VP8">VP8</a> for
                      video.
                    </p>
                    <p>Tox does not make use of SIP.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="tox-tracking-dht">
                  <h5 className="mb-0">
                    <a
                      href=""
                      className="btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse-tox-tracking-dht"
                      aria-expanded="false"
                      aria-controls="collapse-tox-tracking-dht"
                    >
                      How does Tox prevent tracking?
                    </a>
                  </h5>
                </div>
                <div
                  id="collapse-tox-tracking-dht"
                  className="collapse show"
                  aria-labelledby="tox-tracking-dht"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Tox generates a temporary public/private key pair used to
                    make connections to non-friend peers in the DHT.{" "}
                    <a href="https://en.wikipedia.org/wiki/Onion_routing">
                      Onion routing
                    </a>{" "}
                    is used to store and locate Tox IDs, to make it more
                    difficult to, for example, associate Alice and Bob together
                    by who they are looking for in the network.
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

export default Page;
