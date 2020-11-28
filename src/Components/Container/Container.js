/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import Header from '../Header/Header';
import './Container.css';

import { getCurrentLocationDataFromUser } from '../Utils/Utils';
import AutoComplete from '../AutoComplete/AutoComplete';
import WeatherContainer from '../WeatherContainer/WeatherContainer';
import ForecastContainer from '../ForecastContainer/ForeCastContainer';

export default function Container() {
  // const [lat, setLat] = useState(lat);
  // const [lon, setLon] = useState(lon);

  const setUsersCurrentLocation = (data) => {
    const query = new URLSearchParams(window.location.search);
    if (!query.get('lat') || !query.get('lon')) {
      const url = new URL(window.location);
      url.searchParams.set('place', 'Delhi');
      url.searchParams.set('country', 'IN');
      url.searchParams.set('lat', data.coords.latitude);
      url.searchParams.set('lon', data.coords.longitude);
      window.history.pushState({}, '', url);
    }
  };

  useEffect(() => {
    getCurrentLocationDataFromUser(
      setUsersCurrentLocation,
      setUsersCurrentLocation,
    );
  }, []);

  return (
    <div className="container">
      <Router>
        <div className="container__fix-components">
          <Header>
            <AutoComplete />
          </Header>
        </div>

        <WeatherContainer />

        <ForecastContainer />
      </Router>
    </div>
  );
}
