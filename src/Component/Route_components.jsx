import React from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import { Routes, Route } from "react-router-dom";
import Services from "./Services";
import Home from "./Home";

const Route_components = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
};

export default Route_components;
