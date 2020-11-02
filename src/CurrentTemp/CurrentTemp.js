import { useEffect, useState } from "react";
import { WeatherIcon } from "../WeatherIcon/WeatherIcon";
import "./CurrentTemp.css";

function convertScale(temp, scale) {
  if (scale === "f") {
    const f = temp * (9 / 5) + 32;
    return f;
  }
  if (scale === "c") {
    const c = (temp - 32) * (5 / 9);
    return c;
  }
}

export function CurrentTemp({ temp, iconType }) {
  const [activeUnit, setActiveUnit] = useState("c");
  const [temperature, setTemperature ] = useState(0);


  useEffect(() => {
    setTemperature(temp);
  }, [temp])


  const handleTemp = (convertTo) => {
      if( activeUnit === convertTo) {
        return;
      }
      const newTemperature = convertScale(temperature, convertTo);
      setActiveUnit(convertTo);
      setTemperature(newTemperature);
  }

  return (
    <div className="temp__container">
      <div className="weather__info">
        <div className="weather__icon">
          <WeatherIcon type={iconType && iconType.toLowerCase()} />
        </div>
      </div>
      <div className="temp__info">
        <div className="temp__value">
          {Math.round(temperature)}
          <sup>o</sup>
        </div>
        <div
          onClick={() => {
            handleTemp('c')
          }}
          className={
            activeUnit === "c" ? "scale__active  temp__units" : "temp__units"
          }
        >
          C
        </div>
        <div
          onClick={() => {
            handleTemp('f')
          }}
          className={
            activeUnit === "f" ? "scale__active  temp__units" : "temp__units"
          }
        >
          F
        </div>
      </div>
    </div>
  );
}
