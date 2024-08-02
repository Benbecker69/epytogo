import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/AboutPage";
import Articles from "../pages/ArticlesPage/ArticlesPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/articles" element={<Articles/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );
};

export default AppRoutes;
