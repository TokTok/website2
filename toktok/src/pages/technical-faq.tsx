import * as React from "react";
import Card from "../components/Accordion/Card";
import Layout from "../components/layout/main.tsx";
import Link from "gatsby-link";

const Page = () => (
  <Layout>
    <div id="faqs" className="section lb">
      <div className="container">
        <div className="section-title text-center">
          <h3>Technical FAQ</h3>
          <h5>
            <Link to="/faqs/">(go to user FAQ)</Link>
          </h5>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="accordion">
              <Card
                id="tox-central-servers"
                title="Does Tox rely on central servers?"
              >
                No. That said, in some situations a client will choose to use{" "}
                <a href="https://nodes.tox.chat/">
                  publicly listed bootstrap nodes
                </a>{" "}
                to find their way into the DHT.
              </Card>

              <Card
                id="tox-encryption-algorithm"
                title="Which encryption algorithms are used?"
              >
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
                <a href="https://en.wikipedia.org/wiki/Poly1305">poly1305</a>{" "}
                for MACs. Clients use the{" "}
                <a href="https://github.com/jedisct1/libsodium">libsodium</a>{" "}
                implementation of these algorithms.
              </Card>

              <Card
                id="bootstrap-node-list"
                title="Where are public DHT bootstrap nodes?"
              >
                Check out our{" "}
                <a href="https://nodes.tox.chat/">public nodes list</a> for an
                updated list, including{" "}
                <a href="https://nodes.tox.chat/json">
                  machine-readable JSON output
                </a>
                .
              </Card>

              <Card id="tox-av-used" title="What codecs are used for A/V?">
                <p>
                  <a href="http://opus-codec.org/">Opus</a> for audio, and{" "}
                  <a href="https://en.wikipedia.org/wiki/VP8">VP8</a> for video.
                </p>
                <p>Tox does not make use of SIP.</p>
              </Card>

              <Card
                id="tox-tracking-dht"
                title="How does Tox prevent tracking?"
              >
                Tox generates a temporary public/private key pair used to make
                connections to non-friend peers in the DHT.{" "}
                <a href="https://en.wikipedia.org/wiki/Onion_routing">
                  Onion routing
                </a>{" "}
                is used to store and locate Tox IDs, to make it more difficult
                to, for example, associate Alice and Bob together by who they
                are looking for in the network.
              </Card>
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
