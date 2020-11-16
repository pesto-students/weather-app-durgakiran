/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
// import DateStringShort from '../DateStringShort/Date';
const MONTH_STRINGS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export default function CustomTick(props) {
  const {
    x, y, stroke, payload,
  } = props;

  return (
    <g>
      <text
        x={x}
        y={y + 20}
        dy={-4}
        fill={stroke}
        stroke="#ffffff"
        fontSize={10}
        textAnchor="middle"
      >
        {`${new Date(payload.value).getDate()
        }${
          new Date(payload.value).getDate() > 3
            ? 'th '
            : `${
              new Date(payload.value).getDate() === 3
                ? 'rd '
                : `${new Date(payload.value).getDate() === 2 ? 'nd ' : 'st '}`
            }`
        }${
          MONTH_STRINGS[new Date(payload.value).getMonth()]}`}
      </text>
    </g>
  );
}

CustomTick.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  stroke: PropTypes.string.isRequired,
};
