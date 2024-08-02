import React, { useEffect } from "react";
import styles from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {

  return (
    <div className={styles.root}>
      <h1>404</h1>
      <p>Oups, il semble que cette page se soit perdue dans les sables du désert. Mais pas de panique, votre aventure en Égypte est toujours en sécurité !</p>
      <Link to="/"><span>Retour sur la page d'accueil</span></Link>
    </div>
  );
};

export default NotFound;
