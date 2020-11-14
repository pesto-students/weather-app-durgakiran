import React from 'react';
import './Logo.css';

export default function Logo() {
  return (
    <div className="logo">
      <img src="./thermometer.svg" height="2rem" alt="logo" />
      <div className="logo__title">Aeer</div>
    </div>
  );
}
