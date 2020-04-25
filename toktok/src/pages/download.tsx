import * as React from "react";
import Layout from "../layouts/main.tsx";
import Link from "gatsby-link";
import { detectOS } from "../components/osdetect";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { os: detectOS() };
  }

  componentDidMount() {
    // TODO(iphydf): Make this work with static html generation.
    this.setState({ os: detectOS() });
  }

  render() {
    const os = this.state.os;
    return (
      <Layout>
        <div id="download" className="section noover download-bg">
          <div className="container">
            <div className="row align-items-center text-center">
              <div className="col-md-6 col-sm-12">
                <div className="customwidget text-left">
                  <h1>Thanks for downloading!</h1>
                  <p>
                    After you've installed,{" "}
                    <a href="#social">invite some friends</a> to join you on
                    Tox!
                  </p>
                </div>
                <div className="text-center">
                  <a
                    href={os.client.link}
                    className="hvr-bounce-to-right cd-hero__btn"
                  >
                    <span className={"fa fa-" + os.client.icon}>&nbsp;</span>
                    Download
                  </a>
                </div>
              </div>
              <div className="col-md-6 download-image">
                <div className="text-center image-center">
                  <img
                    src={"/images/download/" + os.name + ".png"}
                    className="img-fluid wow fadeInUp"
                    alt="Tox on your device"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="download-icons" id="download-icons">
          <div className="box-icon">
            <div className="btn-buy">
              <Link to="/download/android/">
                <i className="fa fa-android"></i> Download for{" "}
                <strong>Android</strong>
              </Link>
            </div>
            <div className="btn-buy">
              <a href="https://github.com/qTox/qTox-nightly-releases/releases/download/ci-master-latest/qTox.dmg">
                <i className="fa fa-apple"></i> Download for{" "}
                <strong>macOS</strong>
              </a>
            </div>
            <div className="btn-buy">
              <a href="https://github.com/qTox/qTox-nightly-releases/releases/download/ci-master-latest/setup-qtox-x86_64-release.exe">
                <i className="fa fa-windows"></i> Download for{" "}
                <strong>Windows</strong>
              </a>
            </div>
            <div className="btn-buy">
              <a href="https://github.com/qTox/qTox-nightly-releases/releases/download/ci-master-latest/qtox-x86_64-release.zip">
                <i className="fa fa-linux"></i> Download for{" "}
                <strong>Linux</strong>
              </a>
            </div>
            <div className="btn-buy">
              <Link to="/download/other/">
                <i className="fa fa-question"></i> Other{" "}
                <strong>Systems</strong>
              </Link>
            </div>
          </div>
        </div>

        <div id="social" className="modalDialog button">
          <div>
            <a href="#close" className="close-overlay"></a>
            <a href="#close" title="Close" className="close">
              <span className="fa fa-close">&nbsp;</span>
            </a>

            <h2>Share the Love</h2>

            <p>This is where you tell your friends how awesome Tox is.</p>
            <p>
              (These are all manual sharing links, no creepy tracking widgets.)
            </p>
            <section className="tabsection">
              <input id="tab-20" name="shareOpt" type="radio" />
              <label htmlFor="tab-20" className="tablabel">
                <span className="icon-dramabird"></span>
              </label>
              <div className="tabdiv">
                <p>Tweet your friends:</p>
                <p className="socialquote">
                  Tired of worrying if someone's reading your conversations?
                  Ditch Skype and other unsafe chat programs for #tox!{" "}
                </p>
                <a
                  href="http://twitter.com/home?status=Tired%20of%20worrying%20if%20someone%27s%20reading%20your%20conversations?%20Ditch%20Skype%20and%20other%20unsafe%20chat%20programs%20for%20%23Tox!%20https://tox.chat/"
                  target="_blank"
                  className="socialbutton tweet"
                >
                  <span className="fa fa-twitter">&nbsp;</span>Tweet
                </a>
              </div>
              <input id="tab-30" name="shareOpt" type="radio" />
              <label htmlFor="tab-30" className="tablabel">
                <span className="icon-minionbook"></span>
              </label>
              <div className="tabdiv">
                <p>Post on Facebook:</p>
                <p className="socialquote">
                  Whether it's corporations or governments, there's just too
                  much digital spying going on today. Tox is easy-to-use
                  software that connects you with friends and family without
                  anyone else listening in. While other big-name services
                  require you to pay for features, Tox is totally free and comes
                  without advertising — forever.
                </p>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=tox.chat"
                  target="_blank"
                  className="socialbutton facebook"
                >
                  <span className="fa fa-facebook">&nbsp;&nbsp;</span>Share
                </a>
              </div>
              <input id="tab-40" name="shareOpt" type="radio" />
              <label htmlFor="tab-40" className="tablabel">
                <span className="icon-diaspora"></span>
              </label>
              <div className="tabdiv">
                <p>Share on Diaspora:</p>
                <p className="socialquote">
                  Join me on Tox, a distributed, encrypted, multimedia
                  messenger!
                </p>
                <a
                  href="http://sharetodiaspora.github.io/?title=Join me on Tox, a distributed, encrypted, multimedia messenger!&url=http://tox.chat"
                  target="_blank"
                  className="socialbutton diaspora"
                >
                  <span className="fa">d*&nbsp;</span>Post
                </a>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Page;
