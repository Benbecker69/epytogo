import React from 'react';
import SearchBar from '../SearchBar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import pyramidImage from '../../assets/images/pyramid_home_page.PNG';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '60px' }}>
                <div style={{ marginRight: '20px', position: 'absolute', top: '0px', left: '160px' }}>
                    <Link to="/">
                        <img src={logo} alt="Logo" style={{ width: '110px' }} />
                    </Link>
                </div>
            </div>
            <h1 style={{ fontFamily: "Papyrus", color: "gold", fontSize: "40px" }}>EPYTOGO</h1>
            <h2 style={{ fontFamily: "Papyrus", color: "#E8BC88", fontSize: "30px" }}>Où voulez-vous allez ?</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexGrow: 1, marginBottom: '10px' }}>
                <Button style={{ fontFamily: "Arial", color: "#54F98D", margin: '0 10px' }}>Primary</Button>
                <Button style={{ fontFamily: "Arial", color: "#54F98D", margin: '0 10px' }}>Primary</Button>
                <Button style={{ fontFamily: "Arial", color: "#54F98D", margin: '0 10px' }}>Primary</Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <SearchBar />
            </div>
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
                marginLeft: '290px'
            }}>
                <h2 style={{
                    fontFamily: "Arial",
                    fontSize: "30px",
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                }}>
                    EPYTOGO
                </h2>
            </div>
        </div>
    );
};

export default Home;
