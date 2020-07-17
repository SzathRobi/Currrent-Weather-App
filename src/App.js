import React, { useState, useEffect, useRef } from "react";
import Weather from "./components/Weather/Wheater";
import "./App.css";
import Search from "./components/Search/Search";
import cloudy from "./imgs/cloudy.jpg";
import rainy from "./imgs/rainy.png";
import sunny from "./imgs/sunny.png";

function App() {
  const APP_KEY = "264930bb2d7f30c645f3d63b3b08292d";

  const [searchValue, setSearchValue] = useState("Budapest");
  const updateSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const [query, setQuery] = useState("Budapest");
  const updateQuery = (event) => {
    event.preventDefault();
    setQuery(searchValue);
  };

  useEffect(() => {
    getWeatherData();
  }, [query]);

  const [weatherDataMain, setWeatherDataMain] = useState([]);
  const [weatherDataWeather, setWeatherDataWeather] = useState([]);

  const getWeatherData = async () => {
    if (searchValue !== "") {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?&q=${query}&units=metric&appid=${APP_KEY}`
      );
      const data = await response.json();
      setWeatherDataMain(data.main);
      setWeatherDataWeather(data.weather[0]);
    }
  };

  const updateBg = () => {
    if (weatherDataWeather.main === "Clear") return sunny;
    if (weatherDataWeather.main === "Clouds") return cloudy;
    if (weatherDataWeather.main === "Rain") return rainy;
  };

  const tempStyle = {
    backgroundImage: `url(${updateBg()})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="App" style={tempStyle}>
      <Search
        searchValue={searchValue}
        updateSearchValue={updateSearchValue}
        updateQuery={updateQuery}
      />

      <Weather
        city={query}
        temp={Math.floor(weatherDataMain.temp)}
        tempMin={Math.floor(weatherDataMain.temp_min)}
        tempMax={Math.floor(weatherDataMain.temp_max)}
        humidity={weatherDataMain.humidity}
        pressure={weatherDataMain.pressure}
        description={weatherDataWeather.description}
        weatherType={weatherDataWeather.main}
      />
    </div>
  );
}

export default App;
