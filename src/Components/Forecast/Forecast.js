/* eslint-disable react/prop-types */
import React from 'react';
import DateStringShort from '../DateStringShort/Date';
import Error from '../Error/Error';
import ForecastGraph from '../ForecastGraph/ForecastGraph';

export default function Forecast({ error, forecasts }) {
  return (
    <>
      {/* <h3 className="forecasts__title">Hourly forecasts for next 5 days: </h3> */}
      <div className="container__forecast">
        {error ? (
          <Error message={error} />
        ) : (
          <ForecastGraph data={forecasts} />
        )}
        <div className="forecasts">
          {
            error ? null
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
