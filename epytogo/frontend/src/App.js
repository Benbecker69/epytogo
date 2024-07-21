// src/App.js
import React, { useState, useEffect } from 'react';
import { getPointsOfInterest } from './services/api';

function App() {
    const [pointsOfInterest, setPointsOfInterest] = useState([]);

    useEffect(() => {
        getPointsOfInterest('Cairo', 50).then(response => {
            setPointsOfInterest(response.data);
        }).catch(error => {
            console.error("Error", error);
        });
    }, []);

    return (
        <div className="App">
            <h1>TestPage</h1>
            <ul>
                {pointsOfInterest.map((poi, index) => (
                    <li key={index}>{poi.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
