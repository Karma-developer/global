import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import TourDetails from "./../pages/TourDetails";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import SearchResultList from "./../pages/SearchResultList";
import ThankYou from "../pages/ThankYou";
import Autos from "../pages/Auto";
import Servizi from "../pages/Servizi";
import Prenota from "../pages/Prenota";
import Prenotazione from "../ricerca/searchdestinazione/prenotazione";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/prenota" element={<Prenota />} />
      <Route path="/prenotazione" element={<Prenotazione />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/autos" element={<Autos />} />
      <Route path="/servizi" element={<Servizi />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;
