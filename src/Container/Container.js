import React, { Component } from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import './Container.css';

import { 
    getCurrentLocationDataFromUser,
    getWeatherDataByLatLon
 } from '../Utils/Utils';
import { Location } from '../Location/Location';
import { Time } from '../Time/Time';

class Container extends Component {

    constructor() {
        super();
        this.state = {
            city: '',
            country: '',
            timezone: 0
        }
    }

    componentDidMount() {
        //getCurrentLocationDataFromUser(this.setUsersCurrentLocation);
        this.setUsersCurrentLocation();
    }

    setUsersCurrentLocation(data) {
        console.log(data);
        const weatherData = getWeatherDataByLatLon(
            data && data.coords.latitude,
            data && data.coords.longitude
        );

        this.setWeatherData(weatherData);
    }

    setWeatherData(data) {
        console.log(data)
        this.setState((prevState) => {
            return {
                ...prevState,
                city: (data.city && data.city.name) ? data.city.name : '',
                country: (data.city && data.city.country) ? data.city.country : '',
                timezone: (data.city && data.city.timezone) ? data.city.timezone : 0
            }
        })
    }


    render() {
        return (
            <div className="container">
                <div className="container__fix-components">
                    <Header>
                        <Search />
                    </Header>
                </div>
                <div className="container__content">
                    <div className="container__location-data">
                        <Location city={this.state.city}  country={this.state.country}>
                            <Time timezone={this.state.timezone} />
                        </Location>
                    </div>
                </div>
            </div>
        );
    }
}

export default Container;