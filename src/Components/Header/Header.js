/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export default function Header({ children }) {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__occ-space" />
        {children}
      </div>
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.object.isRequired,
};
