import React from "react";
import styles from "./Reader.module.css";
import Nav from "../Nav/Nav"
import logo from '../../../assets/images/png/logo.png';

const Header = () => {
  return (
    <header className={styles.root}>
      <img className="logo" src={logo} alt="Logo Epytogo"></img>
      <Nav />
    </header>
  );
};

export default Header;