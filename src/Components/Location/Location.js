import React from 'react';
import PropTypes from 'prop-types';
import './Location.css';

export default function Location({ city, country, children }) {
  return (
    <div className="location">
      <div className="location__container">
        <div className="location__city">{city}</div>
        <div>,</div>
        <div className="location__country">{country}</div>
      </div>
      {children}
    </div>
  );
}

Location.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
};
