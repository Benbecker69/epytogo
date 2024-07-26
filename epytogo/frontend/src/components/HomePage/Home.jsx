import React from 'react';
import SearchBar from '../SearchBar';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import pyramidImage from '../../assets/images/pyramid_home_page.PNG';
import CarouselHome from "../Carrousel/CarouselHome";
import Footer from '../Footer';
import sphinx_of_gizeh from '../../assets/images/le_sphinx_de_gizeh.jpg';
import pyramid_of_gizeh from '../../assets/images/pyramid_of_gizeh.PNG';
import museum_of_caire from '../../assets/images/musee_caire.jpg';
import temples_of_karnak from '../../assets/images/temple_karnak.jpg';
import Header from "../Header";


const Home = () => {
    const images = [
        sphinx_of_gizeh,
        pyramid_of_gizeh,
        museum_of_caire,
        temples_of_karnak,
    ];
    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F5F5F5'}}>
            <Header style={{textAlign: 'center', padding: '20px'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '60px'}}>
                    <div style={{marginRight: '20px', position: 'absolute', top: '0px', left: '160px'}}>
                        <Link to="/">
                            <img src={logo} alt="Logo" style={{width: '110px'}}/>
                        </Link>
                    </div>
                </div>
            </Header>
                <h1 style={{fontFamily: "Papyrus", color: "gold", fontSize: "40px"}}>EPYTOGO</h1>
                <h2 style={{fontFamily: "Papyrus", color: "#E8BC88", fontSize: "30px", marginTop: '-10px'}}>Où voulez-vous allez ?</h2>
                <div style={{display: 'flex', justifyContent: 'center', flexGrow: 1, marginBottom: '5px'}}>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <SearchBar/>
                </div>
            <main style={{flex: '1'}}>
                <div style={{
                    width: '900px',
                    height: '500px',
                    marginTop: '60px',
                    borderRadius: '20px',
                    backgroundImage: `url(${pyramidImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    <h2 style={{
                        fontFamily: "Arial",
                        fontSize: "25px",
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}>
                        EPYTOGO, votre compagnon parfait pour vos voyages en Egypte.
                        Cherchez vos destinations, monuments culturelles, point d'intérêts.
                    </h2>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', flexGrow: 1, marginBottom: '10px'}}>
                    <h2 style={{fontFamily: "Papyrus", color: "#E8BC88", fontSize: "30px"}}>Partez à la découverte des
                        lieux incontournables</h2>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', width: '80%', margin: 'auto'}}>
                    <CarouselHome images={images}/>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;
