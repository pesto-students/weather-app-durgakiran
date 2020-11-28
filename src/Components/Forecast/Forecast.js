/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import DateStringShort from '../DateStringShort/Date';
import Error from '../Error/Error';
import ForecastGraph from '../ForecastGraph/ForecastGraph';
import { getWeatherDataByLatLon } from '../Utils/Utils';

export default function Forecast({ lat, lon }) {
  const [error, setError] = useState('');
  const [forecasts, setForecasts] = useState();

  const getWeatherData = async (latitude, longitude) => {
    const newForeCasts = await getWeatherDataByLatLon(latitude, longitude);
    if (Number(newForeCasts.cod) !== 200) {
      setError(newForeCasts.message);
    } else {
      setForecasts(newForeCasts.list);
    }
  };

  useEffect(() => {
    const newLat = lat || 28.38;
    const newLon = lon || 77.12;
    getWeatherData(newLat, newLon);
  }, [lat, lon]);

  return (
    <>
      <div className="container__forecast">
        {(!forecasts) ? (
          <Error message={error} />
        ) : (
          <ForecastGraph data={forecasts} />
        )}
        <div className="forecasts">
          {
            !forecasts ? null
              : forecasts.map((value) => (
                <div className="forecast__card" key={value.dt_txt}>
                  <div className="forecast__date">
                    <DateStringShort date={value.dt_txt} />
                  </div>
                  <div>
                    <img
                      src={`https://openweathermap.org/img/wn/${value.weather[0].icon}.png`}
                      alt="weather icon"
                    />
                  </div>
                  <div>
                    {Math.round(value.main.temp)}
                    {' '}
                    <sup>o</sup>
                    {' '}
                    C
                  </div>
                </div>
              ))
          }
        </div>
      </div>
    </>
  );
}
