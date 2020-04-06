import * as React from "react";
import Layout from "../components/layout.tsx";
import Card from "../components/accordion/card.tsx";
import Link from "gatsby-link";

const Page = () => (
  <Layout>
    <div id="faqs" className="section lb">
      <div className="container">
        <div class="section-title text-center">
          <h3>User FAQ</h3>
          <h5>
            <Link to="/technical-faq/">(go to technical FAQ)</Link>
          </h5>
          <p>
            The most common questions we get are answered here. If you have a
            question for us that you think should appear in this list that
            doesn't, send an email to the support mailing list with your
            suggestion:{" "}
            <a href="mailto:support@lists.tox.chat">support@lists.tox.chat</a>
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="accordion" id="accordionExample">
              <Card
                id="how-tox-privacy"
                title="How does Tox protect my privacy?"
              >
                <ul>
                  <li>
                    Tox operates without central authorities to provide
                    messenger services
                  </li>
                  <li>
                    Tox uses{" "}
                    <a href="https://en.wikipedia.org/wiki/End-to-end_encryption">
                      end-to-end encryption
                    </a>{" "}
                    with{" "}
                    <a href="https://en.wikipedia.org/wiki/Forward_secrecy">
                      perfect forward secrecy
                    </a>{" "}
                    as the default and only mode of operation for all messages
                  </li>
                  <li>
                    Tox makes your identity impossible to forge without the
                    possesion of your personal private key, which never leaves
                    your computer
                  </li>
                </ul>
              </Card>

              <Card
                id="how-add-friend"
                title="How do I add someone to my contacts?"
              >
                Look in the profile or settings panel of your client to get your
                Tox ID which should look something like:
                <blockquote>
                  56A1ADE4B65B86BCD51CC73E2CD4E542179F47959FE3E0E21B4B0ACDADE51855D34D34D37CB5
                </blockquote>
                <p>
                  Give yours to your friend and get your friend to add it.
                  That's it.
                </p>
                <p>
                  If you want a shorter and more memorable ID, you can use a
                  service like <a href="https://toxme.io/">ToxMe</a>, that maps
                  an email-address-style username to a Tox ID. However, an
                  individual concerned about their security should avoid using
                  these services where possible. Unfortunately, the cost of this
                  convenient name-to-Tox ID mapping is a loss of
                  decentralization. You must trust that the entity running the
                  service is serving you (and others looking for you) accurate
                  information. If you're not careful, you may be subject to{" "}
                  <a href="https://en.wikipedia.org/wiki/Man-in-the-middle_attack">
                    MITM
                  </a>{" "}
                  attacks.
                </p>
              </Card>

              <Card id="how-block" title="How do I block someone?">
                If you remove someone from your contacts list, they will see you
                go offline, as if you closed your client normally. They can't
                communicate with you any longer until you add them to your
                contacts list again.
              </Card>

              <Card id="leak-ip" title="Does Tox leak my IP address?">
                <p>
                  Tox makes no attempt to cloak your IP address when
                  communicating with friends, as the whole point of a
                  peer-to-peer network is to connect you directly to your
                  friends. A workaround does exist in the form of tunneling your
                  Tox connections through Tor. However, a non-friend user cannot
                  easily discover your IP address using only a Tox ID; you
                  reveal your IP address to someone only when you add them to
                  your contacts list.
                </p>
                <p>
                  See Also:{" "}
                  <Link to="/technical-faq/#tox-tracking-dht">
                    What is stopping people from tracking me through the public
                    DHT (advanced)
                  </Link>
                  .
                </p>
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
