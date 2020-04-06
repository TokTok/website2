import * as React from "react";

const Component: React.FC = ({ id, title, children }) => (
  <div className="card">
    <div className="card-header" id={id}>
      <h5 className="mb-0">
        <a
          href=""
          className="btn-link"
          type="button"
          data-toggle="collapse"
          data-target={"#collapse-" + id}
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {title}
        </a>
      </h5>
    </div>

    <div
      id={"collapse-" + id}
      className="collapse show"
      aria-labelledby={id}
      data-parent="#accordionExample"
    >
      <div className="card-body">{children}</div>
    </div>
  </div>
);

export default Component;
