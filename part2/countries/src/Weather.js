import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Weather = ({countryName}) => {
    const [weather, setWeather] = useState('');

    useEffect(() => {
        (async () => {
            try {
                if (!countryName) {
                    return;
                }
                let response = await axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_KEY}&query=${countryName}`);
                setWeather(response.data);
            } catch (e) {
                console.log(e.message);
            }
        })()
    }, [countryName])

    return (
        <>
            <h1>Weather in {countryName}</h1>
            <div>temperature: {weather.current && weather.current.temperature}</div>
            <img src={weather.current && weather.current.weather_icons[0]} width="100" alt="Weather Icon" />
            <div>wind: {weather.current && weather.current.wind_speed} direction {weather.current && weather.current.wind_dir}</div>
        </>
    )
}
