import { WeatherIcon } from "../WeatherIcon/WeatherIcon";
import "./CurrentTemp.css";

export function CurrentTemp({ temp, iconType }) {
  return (
    <div className="temp__container">
      <div className="weather__info">
        <div className="weather__icon">
          <WeatherIcon type={iconType && iconType.toLowerCase()} />
        </div>
      </div>
      <div className="temp__info">
        <div className="temp__value">
          {Math.round(temp)}
          <sup>o</sup>
        </div>
        <div className="temp__units">C</div>
      </div>
    </div>
  );
}
