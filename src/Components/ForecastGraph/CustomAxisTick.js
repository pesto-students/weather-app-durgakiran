import React from 'react';
import PropTypes from 'prop-types';

export default function CustomAxisTick(props) {
  const {
    x, y, stroke, value, index,
  } = props;

  const ele = (index % 7 === 0) || (index === 0) || (index === 39)
    ? (
      <text
        x={x}
        y={y}
        dy={-4}
        fill={stroke}
        stroke="#ffffff"
        fontSize={10}
        textAnchor="middle"
      >
        {Math.round(value)}
        {' '}
        C
      </text>
    )
    : null;

  return ele;
}

CustomAxisTick.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  stroke: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
