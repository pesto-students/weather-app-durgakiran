/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAutoSuggestions } from '../Utils/Utils';
import styles from './AutoComplete.module.css';
import searchIcon from './searchIcon.svg';

function Loading() {
  return (
    <div className={styles.tomato}>Loading ....</div>
  );
}

function Error({ message }) {
  return (
    <div className={styles.tomato}>{ message }</div>
  );
}

function Suggestions({ inputValue, handleOnOptionSelect }) {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (inputValue.length > 3) {
      setLoading(true);
      getAutoSuggestions()(inputValue)
        .then((res) => {
          if (res.error) {
            setError(res.error);
          } else {
            setSuggestions(res);
          }
        })
        .catch((res) => {
          setError(res.message);
        }).finally(() => {
          setLoading(false);
        });
    }
  }, [inputValue]);

  return (
    <div className={styles.search__results}>
      {
        error && <Error message={error} />
      }
      {
        loading && <Loading />
      }
      <ul>
        {
          Array.isArray(suggestions)
          && suggestions.map((result) => {
            const {
              display_name, address, lat, lon,
            } = result;
            return (
              <li>
                <Link
                  onClick={() => handleOnOptionSelect()}
                  to={`?country=${address.country_code}&place=${address.name}&lat=${lat}&lon=${lon}`}
                >
                  {`${display_name}`}
                </Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

function Input({ handleInputChange, handleEnterKeyPress }) {
  return (
    <input
      type="search"
      name="search"
      onChange={({ target: { value } }) => handleInputChange(value)}
      placeholder="Search city..."
      onKeyUp={({ key }) => ((key === 'Enter') ? handleEnterKeyPress() : '')}
      autoComplete="off"
    />
  );
}

export default function AutoComplete() {
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [domRef, setDomRef] = useState();
  let timerId;

  const handleInputChange = (value) => {
    setInputValue(value);
    setShowSuggestions(true);
  };

  const handleGlobalClickEvent = (event) => {
    if (showSuggestions && !domRef.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  const handleOnOptionSelect = () => {
    setShowSuggestions(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleGlobalClickEvent);

    return () => {
      document.removeEventListener('click', handleGlobalClickEvent);
    };
  }, []);

  const debounce = useCallback((value) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      handleInputChange(value);
    }, 1000);
  }, []);

  return (
    <div className={styles.search__box} ref={(ref) => setDomRef(ref)}>
      <img
        src={searchIcon}
        alt="search icon"
      />
      <Input handleInputChange={(value) => debounce(value)} />
      {
        (inputValue && showSuggestions)
          ? (
            <Suggestions
              inputValue={inputValue}
              handleOnOptionSelect={() => handleOnOptionSelect()}
            />
          ) : ''
      }

    </div>
  );
}
