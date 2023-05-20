import React from "react";
import "../styles/home.css";
import Cards from '../components/card/Cards';
import {Routes, Route, useNavigate} from 'react-router-dom';


import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  const navigate = useNavigate();

  const navigateToPrenota = () => {
    // 👇️ navigate to /contacts
    navigate('/prenota');
  };

  return (
    <>
      {/* ========== hero section start =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={"Scopri prima di partire"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Viaggia nel mondo con noi, crea nuovi
                  <span className="highlight"> ricordi</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ullam ipsum nobis asperiores soluta voluptas quas voluptates.
                  Molestiae tempora dignissimos, animi praesentium molestias
                  perferendis porro expedita delectus. Soluta natus porro.
                </p>
                <button type='button'  onClick={navigateToPrenota} className="button-51">Prenota ora il tuo Traghetto</button>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ========== hero section start =========== */}

      {/* ============ featured tour section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Esplora"} />
              <h2 className="featured__tour-title">Destinazioni</h2>
            </Col>
            <Cards/>
          </Row>
        </Container>
      </section>
      {/* ============ featured tour section end ============ */}

      {/* ============ experience section start ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Fiducia"} />

                <h2>
                 Con noi viaggi SICURO <br /> e VELOCE
                </h2>
                <p>
                  Viaggia con chi ha anni di esperienza
                  <br />
                 Affidati a professionisti.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5 ">
                <div className="counter__box">
                  <span>22k+</span>
                  <h6>Viaggiatori</h6>
                </div>
                <div className="counter__box">
                  <span>10k+</span>
                  <h6>Viaggi all'anno</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Anni di esperienza</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ experience section end ============= */}

      {/* ============ testimonial section start ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Recensioni"} />
              <h2 className="testimonial__title">Cosa dicono di noi</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ testimonial section end ========== */}
      <Newsletter />
    </>
  );
};

export default Home;
