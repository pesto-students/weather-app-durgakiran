/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import './Container.css';

import {
  getCurrentLocationDataFromUser,
  getCurrentWeather,
  getWeatherDataByLatLon,
} from '../Utils/Utils';
import WeatherDetails from '../WeatherDetails/WeatherDetails';
import Error from '../Error/Error';
import Forecast from '../Forecast/Forecast';
import Weather from '../Weather/Weather';
import Loader from '../Loader/Loader';

class Container extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      city: '',
      country: '',
      timezone: 0,
      todayWeather: null,
      forecasts: [],
      searchResults: [],
      weatherDataErrorMessage: '',
      forecastDataErrorMessage: '',
    };
  }

  componentDidMount() {
    getCurrentLocationDataFromUser(
      this.setUsersCurrentLocation.bind(this),
      this.setUsersCurrentLocation.bind(
        this,
        ...[{ coords: { latitude: 28.38, longitude: 77.12 } }],
      ),
    );
  }

  async setUsersCurrentLocation(data) {
    this.setState((prevState) => ({
      ...prevState,
      loading: true,
    }));
    const weatherData = await getWeatherDataByLatLon(
      data && data.coords.latitude,
      data && data.coords.longitude,
    );

    if (Number(weatherData.cod) !== 200 || !weatherData) {
      this.setWeatherErrorMessage(
        weatherData.message || 'Something went wrong',
      );
      return;
    }

    const currentWeatherData = await getCurrentWeather(
      data && data.coords.latitude,
      data && data.coords.longitude,
      undefined,
      undefined,
    );

    if (Number(currentWeatherData.cod) !== 200 || !currentWeatherData) {
      this.setForecastDataErrorMessage(
        currentWeatherData.message || 'Something went wrong',
      );
      return;
    }

    this.setWeatherData(weatherData, currentWeatherData.list[0]);
  }

  setWeatherErrorMessage(message) {
    this.setState((prevState) => ({
      ...prevState,
      weatherDataErrorMessage: message,
      loading: false,
    }));
  }

  setForecastDataErrorMessage(message) {
    this.setState((prevState) => ({
      ...prevState,
      forecastDataErrorMessage: message,
      loading: false,
    }));
  }

  setWeatherData(foreCastData, currentData) {
    this.setState((prevState) => ({
      ...prevState,
      city: currentData.name ? currentData.name : '',
      country:
          currentData.sys && currentData.sys.country
            ? currentData.sys.country
            : '',
      todayWeather: currentData,
      timezone: currentData.timezone ? currentData.timezone : 0,
      forecasts: foreCastData.list,
      searchResults: [],
      loading: false,
      weatherDataErrorMessage: '',
      forecastDataErrorMessage: '',
    }));
  }

  async searchForEnteredLocation(value) {
    let searchResults;
    if (Number.isSafeInteger(Number(value))) {
      searchResults = await getCurrentWeather(
        undefined,
        undefined,
        Number(value),
        undefined,
      );
    } else {
      searchResults = await getCurrentWeather(
        undefined,
        undefined,
        undefined,
        value,
      );
    }
    this.setState((prevState) => ({
      ...prevState,
      searchResults: searchResults.list,
    }));
  }

  render() {
    const {
      loading,
      city,
      country,
      timezone,
      todayWeather,
      forecasts,
      weatherDataErrorMessage,
      forecastDataErrorMessage,
    } = this.state;
    return (
      <div className="container">
        <div className="container__fix-components">
          <Header>
            <Search
              handleSearchInput={(lat, lon) => this.setUsersCurrentLocation({
                coords: {
                  latitude: lat,
                  longitude: lon,
                },
              })}
            />
          </Header>
        </div>

        <div className="container__content">
          {loading ? (
            <Loader />
          ) : !weatherDataErrorMessage ? (
            <>
              <Weather
                city={city}
                country={country}
                timezone={timezone}
                iconType={todayWeather && todayWeather.weather[0].main}
                temp={todayWeather && todayWeather.main.temp}
              />

              <div className="container__other-params">
                <WeatherDetails
                  humidity={
                    todayWeather
                    && todayWeather.main.humidity
                  }
                  pressure={
                    todayWeather
                    && todayWeather.main.pressure
                  }
                  rain={todayWeather && todayWeather.rain}
                  wind={todayWeather && todayWeather.wind}
                />
              </div>
            </>
          ) : (
            <Error message={weatherDataErrorMessage} />
          )}
        </div>

        <Forecast
          error={forecastDataErrorMessage}
          forecasts={forecasts}
        />
      </div>
    );
  }
}

export default Container;
