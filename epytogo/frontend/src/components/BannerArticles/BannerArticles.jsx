import React from "react";
import styles from "./BannerArticles.module.css";
import pharaohsImage from "../../assets/images/pharaohs-banner-articles-page.jpg";

const BannerArticles = () => {
    return (
        <div className={styles.root}>
            <img src={pharaohsImage} alt="pharaohs"/>
            <h2>Découvrez Nos Articles Pratiques : Astuces et Conseils Essentiels pour un Voyage en Égypte Réussi</h2>
        </div>
    );
};

export default BannerArticles;