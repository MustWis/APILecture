import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherApp.css"; // Import the CSS file
import WeatherIcon from "../WeatherIcon/WeatherIcon";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const city = "Istanbul";

  useEffect(() => {
    const api_key = "90ccd00d144edbd275a6c90e474b4660";
    const lang = "tr";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric&lang=${lang}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="header">Current Weather in {city}</h1>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">Error: {error.message}</p>
      ) : (
        <div className="weather-info">
          <p className="temperatures">Sıcaklık: {weatherData.main.temp}°C</p>
          <WeatherIcon iconId={weatherData.weather[0].icon}/>
          <p className="weather-description">
            {weatherData.weather[0].description}
          </p>
          
          <p className="humidity">Nem Oranı: {weatherData.main.humidity}%</p>
          <p className="feels-like">
            Hissedilen Sıcaklık: {weatherData.main.feels_like}°C
          </p>
          <p className="minmax">
            {weatherData.main.temp_min}°/{weatherData.main.temp_max}°
          </p>
          
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
