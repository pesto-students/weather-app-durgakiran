import React from 'react';
import { useLocation } from 'react-router-dom';
import CurrentWeather from '../CurrentWeather/CurrentWeather';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function WeatherContainer() {
  const query = useQuery();

  return (
    <div>
      <CurrentWeather
        newCity={query.get('place') ? query.get('place') : 'Delhi'}
        newCountry={query.get('country') ? query.get('country') : 'IN'}
        newLat={query.get('lat') ? query.get('lat') : 28.38}
        newLon={query.get('lon') ? query.get('lon') : 77.12}
      />
    </div>
  );
}
