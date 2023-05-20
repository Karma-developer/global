import React from "react";
import "./pietro.css";

import { Container, Row, Col } from "reactstrap";

const Pietro= ({ title }) => {
  return (
    <section className="pietro__section">
      <Container>
        <Row>
          <Col lg="12">
            <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Pietro;
