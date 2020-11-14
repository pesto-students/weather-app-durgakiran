import React from 'react';
import PropTypes from 'prop-types';

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

export default function DateStringShort({ date }) {
  return (
    <>
      <span>
        {`${new Date(date).getDate()
        }${
          new Date(date).getDate() > 3
            ? 'th '
            : `${
              new Date(date).getDate() === 3
                ? 'rd '
                : `${new Date(date).getDate() === 2 ? 'nd ' : 'st '}`
            }`
        }${
          MONTH_STRINGS[new Date(date).getMonth()]}`}
      </span>
    </>
  );
}

DateStringShort.propTypes = {
  date: PropTypes.func.isRequired,
};
