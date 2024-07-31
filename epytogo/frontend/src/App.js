import React from 'react';
import './App.css';
import AppRoutes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
