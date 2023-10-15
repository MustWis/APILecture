import React from "react";
import "./WeatherIcon.css"

const WeatherIcon = ({ iconId }) => {
  const iconClass = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  return (
    <div className="icon-container">
      <img src={iconClass} alt="icon" />
    </div>
  );
};

export default WeatherIcon;
