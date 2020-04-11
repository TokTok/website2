import * as React from "react";

const Component: React.FC = () => (
  <div id="about" className="section wb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <h3>About Tox</h3>
            <p>In the following sections we have way too much text.</p>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-6">
          <div className="about-left">
            <img src="/images/about-01.png" className="img-fluid" alt="" />
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="about-right">
            <h2>Long history</h2>
            <p>
              Tox began a few years ago, in the wake of Edward Snowden's leaks
              regarding NSA spying activity. The idea was to create an instant
              messaging application that ran without requiring the use of
              central servers. The system would be distributed, peer-to-peer,
              and end-to-end encrypted, with no way to disable any of the
              encryption features; at the same time, the application would be
              easily usable by the layperson with no practical knowledge of
              cryptography or distributed systems. During the Summer of 2013 a
              small group of developers from all around the globe formed and
              began working on a library implementing the Tox protocol. The
              library provides all of the messaging and encryption facilities,
              and is completely decoupled from any user-interface; for an
              end-user to make use of Tox, they need a Tox client. Fast-forward
              a few years to today, and there exist several independent Tox
              client projects, and the original Tox core library implementation
              continues to improve. Tox (both core library and clients) has
              thousands of users, hundreds of contributors, and the project
              shows no sign of slowing down.
            </p>
          </div>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-lg-5 col-md-6">
          <div className="about-right">
            <h2>Free software</h2>
            <p>
              Tox is a FOSS (Free and Open Source) project. All Tox code is open
              source and all development occurs in the open. Tox is developed by
              volunteer developers who spend their free time on it, believing in
              the idea of the project. Tox is not a company or any other legal
              organization. Currently we don't accept donations as a project,
              but you are welcome to reach out to developers individually.
            </p>
          </div>
        </div>
        <div className="col-lg-7 col-md-6">
          <div className="about-left">
            <img src="/images/about-02.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Component;
