import React from 'react';
import PropTypes from 'prop-types';
import Location from '../Location/Location';
import Time from '../Time/Time';
import CurrentTemp from '../CurrentTemp/CurrentTemp';

export default function Weather(props) {
  const {
    city,
    country,
    timezone,
    iconType,
    temp,
  } = props;
  return (
    <div className="container__main-content">
      <div className="container__location-data">
        <Location city={city} country={country}>
          <Time timezone={timezone} />
        </Location>
      </div>
      <div className="temp_main-card">
        <CurrentTemp
          iconType={iconType}
          temp={temp}
        />
      </div>
    </div>
  );
}

Weather.defaultProps = {
  iconType: 'clear',
  temp: NaN,
};

Weather.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  timezone: PropTypes.number.isRequired,
  iconType: PropTypes.string,
  temp: PropTypes.number,
};
