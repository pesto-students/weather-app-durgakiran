/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  useHistory,
} from 'react-router-dom';
import Header from '../Header/Header';
import './Container.css';

import { getCurrentLocationDataFromUser } from '../Utils/Utils';
import AutoComplete from '../AutoComplete/AutoComplete';
import WeatherContainer from '../WeatherContainer/WeatherContainer';
import ForecastContainer from '../ForecastContainer/ForeCastContainer';

export default function Container() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const setUsersCurrentLocation = (data) => {
    const history = useHistory();
    const query = new URLSearchParams(window.location.search);
    if (!query.get('lat') || !query.get('lon')) {
      setTimeout(() => {
        setLat(data.coords.latitude);
        setLon(data.coords.longitude);
        history.push(`/?lat=${lat}&lon=${lon}`);
      }, 20);
    }
  };

  useEffect(() => {
    getCurrentLocationDataFromUser(
      setUsersCurrentLocation,
      setUsersCurrentLocation,
    );
  }, []);

  if (lat && lon) {
    return (
      <>
        <Redirect to={`?lat=${lat}&lon=${lon}`} />
        <div className="container">
          <div className="container__fix-components">
            <Header>
              <AutoComplete />
            </Header>
          </div>
          <WeatherContainer />

          <ForecastContainer />
        </div>
      </>
    );
  }

  return (
    <div className="container">
      <div className="container__fix-components">
        <Header>
          <AutoComplete />
        </Header>
      </div>
      <WeatherContainer />

      <ForecastContainer />
    </div>
  );
}
