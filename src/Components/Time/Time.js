import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Time.css';

export default function Time({ timezone }) {
  const [time, setTime] = useState('');

  const compileTime = () => {
    const currentTimezoneTime = Date.now();
    const currentTimezoneOffset = new Date().getTimezoneOffset() * 60 * 1000;
    const newTimeNumber = currentTimezoneTime + currentTimezoneOffset + timezone * 1000;
    const currentTimeString = new Date(newTimeNumber).toTimeString();

    const newTime = `${currentTimeString.split('').splice(0, 5).join('')
    } ${
      new Date(newTimeNumber).toDateString()}`;
    setTime(newTime);
  };

  useEffect(() => {
    compileTime();
  }, [timezone]);

  return <div className="current__time">{time}</div>;
}

Time.propTypes = {
  timezone: PropTypes.string.isRequired,
};
