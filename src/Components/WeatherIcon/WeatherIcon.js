import React from 'react';
import PropTypes from 'prop-types';
import cloud from './cloud.svg';
import drizzle from './drizzle.svg';
import haze from './haze.svg';
import moon from './moon.svg';
import rain from './rain.svg';
import snow from './snow.svg';
import sunny from './sunny.svg';
import thunderstorm from './thunderstorm.svg';

export default function WeatherIcon({ type }) {
  let image = '';

  switch (type) {
    case 'cloud':
      image = cloud;
      break;
    case 'drizzle':
      image = drizzle;
      break;
    case 'haze':
      image = haze;
      break;
    case 'moon':
      image = moon;
      break;
    case 'rain':
      image = rain;
      break;
    case 'snow':
      image = snow;
      break;
    case 'clear':
      image = sunny;
      break;
    case 'thunderstorm':
      image = thunderstorm;
      break;

    default:
      image = haze;
      break;
  }

  return (
    <>
      <img src={image} alt="weather" width="100%" height="100%" />
    </>
  );
}

WeatherIcon.defaultProps = {
  type: '',
};

WeatherIcon.propTypes = {
  type: PropTypes.string,
};
