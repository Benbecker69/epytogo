import React from 'react';
import './App.css';
import AppRoutes from "./routes";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <AppRoutes />
            <Footer />
        </div>
    );
}

export default App;
