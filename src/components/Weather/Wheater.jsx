import React, { useState } from "react";
import WeatherMore from "./WeatherMore";
import {
  FaSun,
  FaCloudRain,
  FaCloudShowersHeavy,
  FaCloudSun,
  FaCloud,
} from "react-icons/fa";
import { icons } from "react-icons/lib/cjs";
import "./Weather.css";

function Weather({
  city,
  temp,
  description,
  tempMin,
  tempMax,
  humidity,
  pressure,
  weatherType,
}) {
  /* if(temp === undefined){
        throw new Error("you fucked up badly")
    }*/

  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    showMore ? setShowMore(false) : setShowMore(true);
  };

  return (
    <div className="weather">
      {weatherType === "Clear" ? <FaSun className="weather-icon" /> : null}
      {weatherType === "Rain" ? (
        <FaCloudShowersHeavy className="weather-icon" />
      ) : null}
      {weatherType === "Clouds" ? (
        <FaCloudSun className="weather-icon" />
      ) : null}
      <h2>{description}</h2>
      <div className="city-temp">
        <h1>{city}</h1>
        <h1>{temp}C</h1>
      </div>

      <button onClick={handleShowMore}>{showMore ? "less" : "more"}</button>
      {showMore ? (
        <WeatherMore
          tempMin={tempMin}
          tempMax={tempMax}
          humidity={humidity}
          pressure={pressure}
        />
      ) : null}
    </div>
  );
}

export default Weather;
