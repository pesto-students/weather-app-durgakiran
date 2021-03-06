/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import convertScale from './convertScale';
import './CurrentTemp.css';

export default function CurrentTemp({ temp, iconType }) {
  const [activeUnit, setActiveUnit] = useState('c');
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    setTemperature(temp);
  }, [temp]);

  const handleTemp = (convertTo) => {
    if (activeUnit === convertTo) {
      return;
    }
    const newTemperature = convertScale(temperature, convertTo);
    setActiveUnit(convertTo);
    setTemperature(newTemperature);
  };

  return (
    <div className="temp__container">
      <div className="weather__info">
        <div className="weather__icon">
          <WeatherIcon type={iconType && iconType.toLowerCase()} />
        </div>
        <span className="weather-condition">{iconType}</span>
      </div>
      <div className="temp__info">
        <div className="temp__value">
          {Math.round(temperature)}
          <sup>o</sup>
        </div>
        <div
          role="button"
          tabIndex="0"
          onKeyPress={({ key }) => ((key === 'Enter') ? handleTemp('c') : () => null)}
          onClick={() => {
            handleTemp('c');
          }}
          className={
            activeUnit === 'c' ? 'scale__active  temp__units' : 'temp__units'
          }
        >
          C
        </div>
        <div
          role="button"
          tabIndex="0"
          onKeyPress={({ key }) => ((key === 'Enter') ? handleTemp('f') : () => null)}
          onClick={() => {
            handleTemp('f');
          }}
          className={
            activeUnit === 'f' ? 'scale__active  temp__units' : 'temp__units'
          }
        >
          F
        </div>
      </div>
    </div>
  );
}

CurrentTemp.defaultProps = {
  temp: null,
  iconType: null,
};

CurrentTemp.propTypes = {
  temp: PropTypes.number,
  iconType: PropTypes.string,
};
