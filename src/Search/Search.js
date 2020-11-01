import React, { useState } from "react";
import "./Search.css";
import searchIcon from "./searchIcon.svg";

export default function Search({onChange, results, onClick}) {

  const [inputValue, setInputValue ] = useState('');


  return (
    <div className="search">
      <div className="search__box">
        <img src={searchIcon} alt="search icon" onClick={() => onChange(inputValue)}/>
        <input
          type="search"
          name="search"
          onChange={({target: { value }}) => setInputValue(value)}
          placeholder="Search city or pincode..."
          onKeyUp={({ key }) => {(key === 'Enter') ? onChange(inputValue) : console.log('no input') }}
        />
      </div>
      {
          (results && results.length) ? (<div className="search__results">
                                          {
                                            results && results.map((value, index) => {
                                              return <div key={index} onClick={() => onClick(value)}>{value.name + ', ' + value.sys.country}</div>
                                            })
                                          }
                                        </div>)
                                        : null
      }
    </div>
  );
}
