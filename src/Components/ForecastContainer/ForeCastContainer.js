import React from 'react';
import { useLocation } from 'react-router-dom';
import Forecast from '../Forecast/Forecast';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function ForecastContainer() {
  const query = useQuery();

  return (
    <div>
      <Forecast lat={query.get('lat')} lon={query.get('lon')} />
    </div>
  );
}
