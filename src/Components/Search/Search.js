import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import searchIcon from './searchIcon.svg';
import SearchSuggestions from '../searchSuggestions/SearchSuggestions';

export default function Search({ handleSearchInput }) {
  const [inputValue, setInputValue] = useState('');
  const [isShowSuggestions, setIsShowSuggestions] = useState(false);
  let timerId;

  const handleInputValue = (value) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    setIsShowSuggestions(true);
    timerId = setTimeout(() => {
      if (value) {
        setInputValue(value);
      }
    }, 2000);

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  };

  const handleSuggestionsClick = (value) => {
    if (value.lat && value.lon) {
      setIsShowSuggestions(false);
      handleSearchInput(value.lat, value.lon);
    }
  };

  return (
    <div className="search">
      <div className="search__box">
        <img
          src={searchIcon}
          alt="search icon"
        />
        <input
          type="search"
          name="search"
          onChange={({ target: { value } }) => handleInputValue(value)}
          placeholder="Search city or pincode..."
          onKeyUp={({ key }) => ((key === 'Enter') ? handleInputValue(inputValue) : '')}
          autoComplete="off"
        />
      </div>
      {
        isShowSuggestions
          ? (
            <SearchSuggestions
              inputValue={inputValue}
              handleSuggestionClick={(val) => handleSuggestionsClick(val)}
            />
          ) : null
      }
    </div>
  );
}

Search.propTypes = {
  handleSearchInput: PropTypes.func.isRequired,
};
