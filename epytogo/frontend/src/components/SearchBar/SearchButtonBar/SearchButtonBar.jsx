import * as React from 'react';
import { Button } from '@mui/material';
import { useState } from 'react';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MuseumIcon from '@mui/icons-material/Museum';
import styles from './SearchButtonBar.module.css';

function SearchButtonBar() {
    const [highlightedButton, setHighlightedButton] = useState('restaurant');

    const handleButton1Click = () => {
        setHighlightedButton('restaurant');
    };

    const handleButton2Click = () => {
        setHighlightedButton('museum');
    };

    return (
        <div>
            <Button
                className={`${styles.searchButtonBar} ${highlightedButton === 'restaurant' ? styles.highlighted : ''}`}
                startIcon={<RestaurantIcon />}
                onClick={handleButton1Click}
            >
                Restaurants
            </Button>
            <Button
                className={`${styles.searchButtonBar} ${highlightedButton === 'museum' ? styles.highlighted : ''}`}
                startIcon={<MuseumIcon />}
                onClick={handleButton2Click}
            >
                Sites culturels
            </Button>
        </div>
    );
}

export default SearchButtonBar;
