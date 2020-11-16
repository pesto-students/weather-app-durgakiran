/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Wind from '../Wind/Wind';

export default function WeatherDetails({
  humidity, wind, pressure, rain,
}) {
  return (
    <>
      <div className="container__praram-item">
        <span>Humidity: </span>
        <span>
          {humidity}
          {' '}
          %
        </span>
      </div>
      <div className="container__praram-item">
        <span>Wind: </span>
        <span>{wind && <Wind speed={wind.speed} deg={wind.deg} />}</span>
      </div>
      <div className="container__praram-item">
        <span>Pressure: </span>
        <span>
          {pressure}
          {' '}
          hPa
        </span>
      </div>
      <div className="container__praram-item">
        <span>Rain: </span>
        <span>{rain ? rain['3h'] || `${rain['1h']} mm` : 'No Rain'}</span>
      </div>
    </>
  );
}

WeatherDetails.defaultProps = {
  humidity: null,
  wind: null,
  pressure: null,
  rain: null,
};

WeatherDetails.propTypes = {
  humidity: PropTypes.number,
  wind: PropTypes.object,
  pressure: PropTypes.number,
  rain: PropTypes.string,
};
