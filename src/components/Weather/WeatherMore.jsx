import React from "react";
import { FaSearch } from "react-icons/fa";
import "./WeatherMore.css";

function WeatherMore({ tempMin, tempMax, humidity, pressure }) {
  return (
    <div className="weatherMore">
      <div className="row">
        <h5>Lowest Temp: {tempMin}C</h5>
        <h5>Highest Temp: {tempMax}C</h5>
      </div>
      <div className="row">
        <h5>Humidity: {humidity}%</h5>
        <h5>Pressure: {pressure}hPa</h5>
      </div>
    </div>
  );
}

export default WeatherMore;
