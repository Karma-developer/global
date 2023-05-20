import React, { useState, useEffect } from "react";
import Pietro from "../shared/Pietro";

import "../styles/tour.css";
import TourCard from "./../shared/TourCard";
import Newsletter from "./../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Autos = () => {
 

 

  return (
    <>
      <Pietro title={"Noleggia la tua auto"} />
      <section>
        <Container>
          <Row>
         
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
      
            <Row>
             
             
            </Row>
         
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Autos;
