import { useEffect, useState } from "react";
import Layout from "./Layout";

const SearchCity = (props) => {
  const [latitude, setLatitude] = useState(props.lat);
  const [longitude, setLongitude] = useState(props.long);
  const [weather, setWeather] = useState(null);

  const URL = "https://api.openweathermap.org/data/2.5/weather?";
  const myLatitude = `lat=${latitude}&`;
  const myLongitude = `lon=${longitude}`;
  const myAccessKey = "&APPID=cf19f67355a5052a780ada98827f9cfb";
  const fetchingWeather = async () => {
    try {
      const response = await fetch(URL + myLatitude + myLongitude + myAccessKey);
      if (response.ok) {
        const data = await response.json();
        setWeather(...weather, data.main);
        setWeather(...weather, data.wind);
      } else {
        alert("Error fetching");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchingWeatherTomorrow = async () => {
    try {
      const response = await fetch(URL + myLatitude + myLongitude + myAccessKey);
      if (response.ok) {
        const data = await response.json();
        setWeather(...weather, data.main);
        setWeather(...weather, data.wind);
      } else {
        alert("Error fetching");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchingWeather();
  }, []);

  return (
    <Layout
      min={weather.main.temp_min - 273.15}
      max={weather.main.temp_max - 273.15}
      felt={weather.main.feels_like - 273.15}
      wind={weather.wind.speed}
      humidity={weather.main.humidity}
    />
  );
};

export default SearchCity;
