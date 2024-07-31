import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/components/HomePage/Home";
import About from "../src/components/AboutPage/AboutPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
