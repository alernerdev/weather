import axios from 'axios';

const API_KEY = 'ca1c39d8035b87c48a07138cf348232f'; // weather API key from openweathermap.org
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator returns action object with type
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const requestPromise = axios.get(url); 

    return {
        type: FETCH_WEATHER,
        payload: requestPromise
    }
}