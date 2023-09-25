import { useEffect, useState } from "react";
import Layout from "./Layout";
import { useParams } from "react-router-dom";

const SearchCity = (props) => {
  const [weatherMain, setWeatherMain] = useState(null);
  const [weatherWind, setWeatherWind] = useState(null);
  const [weatherTomorrow, setWeatherTommorow] = useState([]);
  const URL = "https://api.openweathermap.org/data/2.5/weather?";
  const params = useParams();
  const myLatitude = `lat=${params.lat}&`;
  const myLongitude = `lon=${params.lon}`;
  const myAccessKey = "&APPID=cf19f67355a5052a780ada98827f9cfb";
  console.log(params);
  console.log(params.lat);
  const fetchingWeather = async () => {
    try {
      const response = await fetch(URL + myLatitude + myLongitude + myAccessKey);
      if (response.ok) {
        const data = await response.json();
        setWeatherWind(data.wind);
        setWeatherMain(data.main);
      } else {
        alert("Error fetching");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchingWeatherTomorrow = async () => {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?" + myLatitude + myLongitude + myAccessKey
      );
      if (response.ok) {
        const data = await response.json();
        setWeatherTommorow([data.list[0]]);
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

  useEffect(() => {
    fetchingWeatherTomorrow();
  }, []);

  return (
    weatherMain &&
    weatherWind &&
    weatherTomorrow && (
      <Layout
        arr={weatherTomorrow}
        city={params.name}
        country={params.country}
        min={weatherMain.temp_min}
        max={weatherMain.temp_max - 273.15}
        felt={weatherMain.feels_like - 273.15}
        wind={weatherWind.speed}
        humidity={weatherMain.humidity}
      />
    )
  );
};

export default SearchCity;
