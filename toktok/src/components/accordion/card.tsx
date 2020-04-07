import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import SafeAnchor from "react-bootstrap/SafeAnchor";

const Component = ({ id, title, children }) => (
  <Card>
    <Card.Header>
      <h5 className="mb-0">
        <Accordion.Toggle as={SafeAnchor} variant="link" eventKey={id}>
          {title}
        </Accordion.Toggle>
      </h5>
    </Card.Header>
    <Accordion.Collapse eventKey={id}>
      <Card.Body>{children}</Card.Body>
    </Accordion.Collapse>
  </Card>
);

export default Component;
