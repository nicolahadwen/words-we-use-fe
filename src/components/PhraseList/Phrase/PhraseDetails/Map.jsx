import React from "react";
import GoogleMapReact from 'google-map-react';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    mapContainer: {
        [theme.breakpoints.down('sm')]: {
            height: '300px',
        },
        [theme.breakpoints.up('md')]: {
            height: '400px'
        },
        [theme.breakpoints.up('lg')]: {
            height: '400px',
        },
    },
}));

const MapComponent = () => {
    const classes =  useStyles();

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                defaultCenter={{
                    lat: 45.3657,
                    lng: -75.7371
                }}
                defaultZoom={1}
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
            >
            </GoogleMapReact>
        </div>
    )
}


export default MapComponent;