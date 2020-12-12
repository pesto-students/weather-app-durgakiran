/* eslint-disable react/prop-types */
import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import CurrentWeather from '../CurrentWeather/CurrentWeather';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function WeatherContainer() {
  const query = useQuery();

  return (
    <div>
      <CurrentWeather
        newLat={query.get('lat') ? query.get('lat') : 28.38}
        newLon={query.get('lon') ? query.get('lon') : 77.12}
      />
      <Route />
    </div>
  );
}
