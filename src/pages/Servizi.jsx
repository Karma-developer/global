import React, { useState, useEffect } from "react";
import Servizia from "../shared/Servizia";

import "../styles/tour.css";
import TourCard from "./../shared/TourCard";
import Newsletter from "./../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";


const Servizi = () => {
 

  return (
    <>
      <Servizia title={"I nostri servizi"} />
      <section>
        <Container>
          <Row>
         
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
        
            <Row>
              
                <Col lg="3" md="6" sm="6" className="mb-4" >
               
                </Col>
        

              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                 
                  
      
                </div>
              </Col>
            </Row>
     
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Servizi;
