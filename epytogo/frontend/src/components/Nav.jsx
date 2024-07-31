import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <NavLink
                to="/"
                style={({isActive}) => {
                    return {
                        textDecorationLine: isActive ? "underline" : "",
                    };
                }}
            >
                Accueil
            </NavLink>
            <NavLink
                to="/articles"
                style={({isActive}) => {
                    return {
                        textDecorationLine: isActive ? "underline" : "",
                    };
                }}
            >
                Articles
            </NavLink>
            <NavLink
                to="/about"
                style={({isActive}) => {
                    return {
                        textDecorationLine: isActive ? "underline" : "",
                    };
                }}
            >
                À Propos
            </NavLink>
        </nav>
    );
};

export default Nav;