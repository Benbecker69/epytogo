import React from 'react';
import logo from "../assets/images/logo.png";

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#E8BC88',
            color: 'black',
            padding: '20px',
            textAlign: 'center',
            fontFamily: 'Arial',
            fontSize: '14px',
            position: 'relative',
            bottom: '0',
        }}>
            <img src={logo} alt="Logo" style={{width: '150px'}}/>
            <p>Copyright &copy; {new Date().getFullYear()} Epytogo - Tous droits réservés.</p>
            <p>Notre site internet s'adresse aux Francophones. Epytogo n'est en aucun cas un agent de réservation ou bien de
                voyagiste.</p>
        </footer>
    );
};

export default Footer;
