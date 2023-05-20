import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";

import "../styles/tour.css";
import TourCard from "./../shared/TourCard";
import SearchBar from "./../shared/SearchBar";
import Newsletter from "./../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";
import Cards from '../components/card/Cards';

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Tours = () => {
 
  return (
    <>
      <CommonSection title={"Le migliori destinazioni"} />
     <Cards />
      <Newsletter />
    </>
  );
};

export default Tours;
