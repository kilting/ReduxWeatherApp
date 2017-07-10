const API_KEY = '0c75695dd7f230694a5617917182ae36';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},nz`;

    return {
        type: FETCH_WEATHER
    };
}