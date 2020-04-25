import * as React from "react";

class Component extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.getElementById(this.props.id).classList.remove("no-js");
  }

  render() {
    const { id, title, children } = this.props;
    return (
      <div className="card" id={id}>
        <div className="card-header">
          <h5 className="mb-0">
            <a href={"#" + id}>{title}</a>
          </h5>
        </div>
        <div className="collapse">
          <div className="card-body">{children}</div>
        </div>
      </div>
    );
  }
}

export default Component;
