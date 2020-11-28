/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Error.css';

export default function Error({ message }) {
  return (
    <div className="error">
      <div className="error__message">
        {message}
      </div>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
