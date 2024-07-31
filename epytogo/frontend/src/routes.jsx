import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../src/components/HomePage/Home";
import About from "../src/components/AboutPage/AboutPage";
import Articles from "./components/ArticlesPage/ArticlesPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/articles" element={<Articles/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    );
};

export default AppRoutes;
