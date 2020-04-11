import * as React from "react";

const Component: React.FC = () => (
  <div id="features" className="section lb">
    <div className="container">
      <div className="section-title text-center">
        <h3>Tox Features</h3>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="services-inner-box">
            <div className="ser-icon">
              <i className="fa fa-comment effect-1"></i>
            </div>
            <h2>Instant messaging</h2>
            <p>Chat instantly across the globe with Tox's secure messages.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="services-inner-box">
            <div className="ser-icon">
              <i className="fa fa-phone effect-1"></i>
            </div>
            <h2>Voice</h2>
            <p>
              Keep in touch with friends and family using Tox's completely free
              and encrypted voice calls.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="services-inner-box">
            <div className="ser-icon">
              <i className="fa fa-video-camera effect-1"></i>
            </div>
            <h2>Video</h2>
            <p>Catch up face to face, over Tox's secure video calls.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="services-inner-box">
            <div className="ser-icon">
              <i className="fa fa-desktop effect-1"></i>
            </div>
            <h2>Screen sharing</h2>
            <p>
              Share your desktop with your friends with Tox's screen sharing.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="services-inner-box">
            <div className="ser-icon">
              <i className="fa fa-file-text effect-1"></i>
            </div>
            <h2>File sharing</h2>
            <p>
              Trade files, send photos and videos, with no artificial limits or
              caps.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="services-inner-box">
            <div className="ser-icon">
              <i className="fa fa-group effect-1"></i>
            </div>
            <h2>Groups</h2>
            <p>
              Chat, call, and share video and files with the whole gang in Tox's
              group chats.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="why-tox-special clearfix">
      <div className="title text-center">
        <h2>What makes Tox different?</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h3>Encrypted</h3>
            <span class="icon fa fa-shield"></span>
            <p>
              Everything you do with Tox is encrypted using open-source
              libraries. The only people who can see your conversations are the
              people you're talking with.
            </p>
          </div>

          <div className="col-md">
            <h3>Distributed</h3>
            <img src="/images/distributed.svg" alt="Distributed" />
            <p>
              Tox has no central servers that can be overloaded, shut down, or
              forced to turn over data — the network is made up of its users.
              Say goodbye to server outages!
            </p>
          </div>

          <div className="col-md">
            <h3>Free</h3>
            <span class="icon fa fa-heart"></span>
            <p>
              Tox is free software. That's free as in freedom, as well as in
              price. This means Tox is yours — to use, modify, and share —
              because Tox is developed by and for the users.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Component;
