import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

export default function CustomizedInputBase() {
    return (
        <Paper style={{borderRadius: "20px"}}
               component="form"
               sx={{p: '4px 7px', display: 'flex', alignItems: 'center', width: 700}}
        >
            <SearchIcon sx={{p: '10px'}}/>
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="Des sites à visiter, des éléments historiques... "
            />
            <IconButton sx={{p: '10px'}} aria-label="directions">
                <GpsFixedIcon/>
            </IconButton>
            <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
            <Button variant="contained" style={{
                fontFamily: "Arial",
                color: "black",
                backgroundColor: "#54F98D",
                textTransform: 'none',
                borderRadius: '20px',
                marginLeft: '10px'
            }}>Recherche</Button>
        </Paper>
    );
}


