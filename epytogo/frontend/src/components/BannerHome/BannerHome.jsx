import React from "react";
import styles from "./BannerHome.module.css";
import pyramidImage from "../../assets/images/pyramid_home_page.PNG";

const BannerHome = () => {
    return (
        <div className={styles.root}>
            <img src={pyramidImage} alt="nature"/>
            <h3> EPYTOGO, votre compagnon parfait pour vos voyages en Egypte.
                Cherchez vos destinations, monuments culturelles, point d'intérêts.</h3>
        </div>
    );
};

export default BannerHome;