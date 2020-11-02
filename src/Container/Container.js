import React, { Component } from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import "./Container.css";

import {
  getCurrentLocationDataFromUser,
  getCurrentWeather,
  getWeatherDataByLatLon,
} from "../Utils/Utils";
import { Location } from "../Location/Location";
import { Time } from "../Time/Time";
import { CurrentTemp } from "../CurrentTemp/CurrentTemp";
import { WeatherDetails } from "../WeatherDetails/WeatherDetails";
import { DateStringShort } from "../DateStringShort/Date";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      city: "",
      country: "",
      timezone: 0,
      todayWeather: null,
      forecasts: [],
      searchResults: [],
    };
  }

  componentDidMount() {
    getCurrentLocationDataFromUser(
      this.setUsersCurrentLocation.bind(this),
      this.setUsersCurrentLocation.bind(this, ...[
        { coords: { latitude: 28.38, longitude: 77.12 } },
      ])
    );
  }

  async setUsersCurrentLocation(data) {
    console.log(data);
    this.setState((prevState) => {
      return {
        ...prevState,
        loading: true,
      };
    });
    const weatherData = await getWeatherDataByLatLon(
      data && data.coords.latitude,
      data && data.coords.longitude
    );

    const currentWeatherData = await getCurrentWeather(
      data && data.coords.latitude,
      data && data.coords.longitude,
      undefined,
      undefined
    );

    this.setWeatherData(weatherData, currentWeatherData.list[0]);
  }

  async searchForEnteredLocation(value) {
    let searchResults;
    if (Number.isSafeInteger(Number(value))) {
      searchResults = await getCurrentWeather(
        undefined,
        undefined,
        Number(value),
        undefined
      );

      console.log(searchResults);
    } else {
      searchResults = await getCurrentWeather(
        undefined,
        undefined,
        undefined,
        value
      );

      console.log(searchResults);
    }
    this.setState((prevState) => {
      return {
        ...prevState,
        searchResults: searchResults.list,
      };
    });
  }

  setWeatherData(foreCastData, currentData) {
    console.log(currentData);
    this.setState((prevState) => {
      return {
        ...prevState,
        city: currentData.name ? currentData.name : "",
        country:
          currentData.sys && currentData.sys.country
            ? currentData.sys.country
            : "",
        todayWeather: currentData,
        timezone: currentData.timezone ? currentData.timezone : 0,
        forecasts: foreCastData.list,
        searchResults: [],
        loading: false,
      };
    });
  }

  render() {
    return (
      <div className="container">
        <div className="container__fix-components">
          <Header>
            <Search
              onChange={(value) => this.searchForEnteredLocation(value)}
              results={this.state.searchResults}
              onClick={(data) =>
                this.setUsersCurrentLocation({
                  coords: {
                    latitude: data.coord.lat,
                    longitude: data.coord.lon,
                  },
                })
              }
            />
          </Header>
        </div>

        <div className="container__content">
          {this.state.loading ? (
            <div className="shimmer"></div>
          ) : (
            <>
              <div className="container__main-content">
                <div className="container__location-data">
                  <Location city={this.state.city} country={this.state.country}>
                    <Time timezone={this.state.timezone} />
                  </Location>
                </div>

                <div className="temp_main-card">
                  <CurrentTemp
                    iconType={
                      this.state.todayWeather &&
                      this.state.todayWeather.weather[0].main
                    }
                    temp={
                      this.state.todayWeather &&
                      this.state.todayWeather.main.temp
                    }
                  />
                </div>
              </div>

              <div className="container__other-params">
                <WeatherDetails
                  humidity={
                    this.state.todayWeather &&
                    this.state.todayWeather.main.humidity
                  }
                  pressure={
                    this.state.todayWeather &&
                    this.state.todayWeather.main.pressure
                  }
                  rain={this.state.todayWeather && this.state.todayWeather.rain}
                  wind={this.state.todayWeather && this.state.todayWeather.wind}
                />
              </div>
            </>
          )}
        </div>

        <h3 className="forecasts__title">Hourly forecasts for next 5 days: </h3>
        <div className="container__forecast">
          {this.state.forecasts.map((value, index) => {
            return (
              <div className="forecast__card" key={index}>
                <div className="forecast__date">
                  <DateStringShort date={value.dt_txt} />
                </div>
                <div>
                  <img
                    src={`https://openweathermap.org/img/wn/${value.weather[0].icon}.png`}
                    alt="weather icon"
                  />
                </div>
                <div>
                  {Math.round(value.main.temp)} <sup>o</sup> C
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Container;
