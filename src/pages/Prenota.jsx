import React, { useState, useEffect } from "react";

import "../styles/tour.css";
import Newsletter from "./../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";
import SearchBa from "../ricerca/SearchBar";
import Searchlist from '../ricerca/Searchlist';

const Prenota = () => {
 
    const [results, setResults] = useState([]);

 

  return (
    <>
     
      <section>
        <Container>
          <Row>
         
  
     <h1>Ricerca tratte</h1>
   <SearchBa setResults={setResults}/>
 
   
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
      
        <Searchlist results= {results}/>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Prenota;
