import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import CarouselHome from "../../components/Carrousel/CarouselHome";
import sphinx_of_gizeh from '../../assets/images/jpg/sphinx-of-gizeh.jpg';
import pyramid_of_gizeh from '../../assets/images/png/pyramid-of-gizeh.PNG';
import museum_of_caire from '../../assets/images/jpg/museum-caire.jpg';
import temples_of_karnak from '../../assets/images/jpg/temple-karnak.jpg';
import BannerHome from "./BannerHome/BannerHome";
import styles from './HomePage.module.css';

const Home = () => {
    const images = [
        sphinx_of_gizeh,
        pyramid_of_gizeh,
        museum_of_caire,
        temples_of_karnak,
    ];
    return (
        <div className={styles.root}>
            <div className={styles.header}></div>
            <h1 className={styles.title}>EPYTOGO</h1>
            <h2 className={styles.subtitle}>Où voulez-vous allez ?</h2>
            <div className={styles.searchContainer}>
                <SearchBar />
            </div>
            <main className={styles.main}>
                <div className={styles.bannerContainer}>
                    <BannerHome />
                </div>
                <div className={styles.carouselHeader}>
                    <h2 className={styles.subtitle}>Partez à la découverte des lieux incontournables</h2>
                </div>
                <div className={styles.carouselContainer}>
                    <CarouselHome images={images} />
                </div>
            </main>
        </div>
    );
};

export default Home;
