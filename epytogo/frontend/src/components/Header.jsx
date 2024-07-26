import React from "react";
import styles from "./header.module.css";
import Nav from "./Nav"
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className={styles.root}>
      <img className="logo" src={logo} alt="Logo Epytogo"></img>
      <Nav />
    </header>
  );
};

export default Header;