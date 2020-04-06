import * as React from "react";

const Component: React.FC = ({ children }) => (
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
          How does Tox protect my privacy?
        </a>
      </h5>
    </div>

    <div
      id="collapseOne"
      className="collapse show"
      aria-labelledby="headingOne"
      data-parent="#accordionExample"
    >
      <div className="card-body">{children}</div>
    </div>
  </div>
);

export default Component;
