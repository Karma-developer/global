import React from "react";
import "./servizia.css";

import { Container, Row, Col } from "reactstrap";

const Servizia= ({ title }) => {
  return (
    <section className="servizio__section">
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

export default Servizia;
