import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import useAsync from '../../Hooks/UseAsync';
import { getAutoSuggestions } from '../Utils/Utils';

export default function SearchSuggestions({ inputValue, handleSuggestionClick }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);
  // const res = useAsync(getAutoSuggestions(), [inputValue]);

  useEffect(() => {
    setLoading(true);
    if (inputValue.length > 3) {
      getAutoSuggestions()(inputValue)
        .then((res) => {
          setResults(res);
        })
        .catch((res) => {
          setError(res.message);
        }).finally(() => {
          setLoading(false);
        });
    }
  }, [inputValue]);

  return (
    <div className="auto-suggestions">
      <div className="search__results" role="listbox">
        {
            loading ? <span className="tomato">loading...</span> : null
        }
        {
          error ? <span className="tomato">{error}</span> : null
        }
        {results && results.map((value, index) => (
          <div
            role="option"
            aria-selected={index === 0 ? 'true' : 'false'}
            key={value.place_id}
            tabIndex="-1"
            onClick={() => handleSuggestionClick(value)}
            onKeyUp={({ key }) => ((key === 'Enter') ? handleSuggestionClick(value) : '')}
          >
            {`${value.display_name}`}
          </div>
        ))}
      </div>
    </div>
  );
}

SearchSuggestions.defaultProps = {
  inputValue: '',
};

SearchSuggestions.propTypes = {
  inputValue: PropTypes.string,
  handleSuggestionClick: PropTypes.func.isRequired,
};
