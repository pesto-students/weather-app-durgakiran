/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import { getCurrentWeatherData } from '../Utils/Utils';
import Weather from '../Weather/Weather';
import WeatherDetails from '../WeatherDetails/WeatherDetails';
import './CurrentWeather.css';

export default function CurrentWeather(props) {
  const {
    newCity, newCountry, newLat, newLon,
  } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [city, setCity] = useState('Delhi');
  const [country, setCountry] = useState('IN');
  const [time, setTime] = useState();
  const [iconType, setIconType] = useState();
  const [temp, setTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [pressure, setPressure] = useState();
  const [rain, setRain] = useState();
  const [wind, setWind] = useState();
  const [lat, setLat] = useState(28.38);
  const [lon, setLon] = useState(77.12);
  const [timezone, setTimezone] = useState(19800);

  const getWeatherData = async () => {
    const currentData = await getCurrentWeatherData(lat, lon);
    if (Number(currentData.cod) !== 200) {
      setError(currentData.message);
      setLoading(false);
    } else {
      try {
        if (currentData.timezone && currentData.dt) {
          setTimezone(currentData.timezone);
          setTime(currentData.dt);
        }
        if (currentData.weather) {
          setIconType(currentData.weather[0].main);
        }
        if (currentData.main) {
          setTemp(currentData.main.temp);
          setHumidity(currentData.main.humidity);
          setPressure(currentData.main.pressure);
        }
        setRain(currentData.rain);
        setWind(currentData.wind);
      } catch (e) {
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    setCity(newCity);
    setCountry(newCountry);
    setLat(newLat);
    setLon(newLon);
    setLoading(true);
    setError();
    getWeatherData();
  }, [newCity, newCountry, newLat, newLon]);

  return (
    <div className="container__content">
      {loading ? <Loader /> : ''}
      {error ? <div className="tomato">{error}</div> : ''}
      {(!loading && !error) ? (
        <>
          <Weather
            city={city}
            country={country}
            time={time}
            timezone={timezone}
            iconType={iconType}
            temp={temp}
          />
          <div className="container__other-params">
            <WeatherDetails
              humidity={humidity}
              pressure={pressure}
              rain={rain}
              wind={wind}
            />
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}
