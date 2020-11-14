/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import searchIcon from './searchIcon.svg';

export default function Search({ onChange, results, onClick }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="search">
      <div className="search__box">
        <img
          src={searchIcon}
          alt="search icon"
          onKeyDown={() => onChange()}
          onClick={() => onChange(inputValue)}
          role="button"
          tabIndex="0"
        />
        <input
          type="search"
          name="search"
          onChange={({ target: { value } }) => setInputValue(value)}
          placeholder="Search city or pincode..."
          onKeyUp={({ key }) => ((key === 'Enter') ? onChange(inputValue) : '')}
        />
      </div>
      {results && results.length ? (
        <div className="search__results">
          {results
            && results.map((value) => (
              <div tabIndex="0" role="button" onKeyPress={() => onClick()} key={value.name} onClick={() => onClick(value)}>
                {`${value.name}, ${value.sys.country}`}
              </div>
            ))}
        </div>
      ) : null}
    </div>
  );
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  results: PropTypes.object.isRequired,
};
