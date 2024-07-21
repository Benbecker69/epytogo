// src/services/api.js
import axios from 'axios';

const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
});

export const getPointsOfInterest = (location, radius) => {
    return API.get(`/points-of-interest?location=${location}&radius=${radius}`);
};

export default API;
