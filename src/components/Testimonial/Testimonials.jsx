import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.png";
import ava02 from "../../assets/images/ava-2.png";
import ava03 from "../../assets/images/ava-3.png";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
        Lo staff è gentilissimo.  Avevamo un problema con il ns traghetto e si sono adoperati in tre per risolverlo.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Enrico P.</h6>
            <p>Cliente</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        Viaggio da tanti anni con quest'agenzia e mi sono sempre trovato benissimo.Disponibili sempre.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Vincenza P.</h6>
            <p>Cliente</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        Comunicazioni rapide e precise
Affidabili e super veloci
Ottimo servizio!!
Consiglio vivamente 😃
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Cristiana S.</h6>
            <p>Cliente</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
        Massima serietà e cordialità, servizio eccellente. Unici nel loro genere.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Angela P.</h6>
            <p>Cliente</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
