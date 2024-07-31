import React from 'react';
import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import CarouselHome from "../Carrousel/CarouselHome";
import sphinx_of_gizeh from '../../assets/images/le_sphinx_de_gizeh.jpg';
import pyramid_of_gizeh from '../../assets/images/pyramid_of_gizeh.PNG';
import museum_of_caire from '../../assets/images/musee_caire.jpg';
import temples_of_karnak from '../../assets/images/temple_karnak.jpg';
import BannerHome from "../BannerHome/BannerHome";

const Home = () => {
    const images = [
        sphinx_of_gizeh,
        pyramid_of_gizeh,
        museum_of_caire,
        temples_of_karnak,
    ];
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F5F5F5' }}>
            <div style={{ textAlign: 'center', padding: '20px' }}>
            </div>
            <h1 style={{ fontFamily: "Papyrus", color: "gold", fontSize: "40px" }}>EPYTOGO</h1>
            <h2 style={{ fontFamily: "Papyrus", color: "#E8BC88", fontSize: "30px", marginTop: '-10px' }}>Où voulez-vous allez ?</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexGrow: 1, marginBottom: '5px' }}>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <SearchBar />
            </div>
            <main style={{ flex: '1' }}>
                <div style={{ display: 'flex', justifyContent: 'center', width: '80%', margin: 'auto' }}>
                    <BannerHome />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', flexGrow: 1, marginBottom: '10px' }}>
                    <h2 style={{ fontFamily: "Papyrus", color: "#E8BC88", fontSize: "30px" }}>Partez à la découverte des lieux incontournables</h2>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '80%', margin: 'auto', marginBottom: '100px' }}>
                    <CarouselHome images={images} />
                </div>
            </main>
        </div>
    );
};

export default Home;
