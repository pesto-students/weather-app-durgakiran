const base_url = 'http://localhost:5001/weather-app-9d078/us-central1/searchLocation/';

export function getCurrentLocationDataFromUser(fn) {
    if(typeof fn !== 'function') {
        throw new Error(`expected function instead gor ${typeof fn}`);
    }

    return navigator.geolocation.getCurrentPosition(
        (data) => fn(data),
        (error) => {console.log("error", error)},
    );
}


export async function getLocationFromIp() {
    /**
     * TODO: update the base url once development done
     */
    const locationObj = await fetch(`${base_url}ip`)
                                .then(data => data.json())
                                .catch((data) => data.json())

    console.log(locationObj);                                
    return locationObj;
}

export function getWeatherDataByLatLon(lat, lon) {
    // const weatherByLatLon = await fetch(`${base_url}forecast30?lat=${lat}&lon=${lon}`)
    //                                 .then(data => data.json())
    //                                 .catch(data => data.json())

    // return weatherByLatLon;
    return hardCodedWeatherJSON;

}

const hardCodedWeatherJSON = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
      {
        "dt": 1604178000,
        "main": {
          "temp": 22.63,
          "feels_like": 23.61,
          "temp_min": 22.1,
          "temp_max": 22.63,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 998,
          "humidity": 72,
          "temp_kf": 0.53
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 3
        },
        "wind": {
          "speed": 2.18,
          "deg": 337
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-10-31 21:00:00"
      },
      {
        "dt": 1604188800,
        "main": {
          "temp": 21.71,
          "feels_like": 22.63,
          "temp_min": 21.32,
          "temp_max": 21.71,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 999,
          "humidity": 73,
          "temp_kf": 0.39
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 7
        },
        "wind": {
          "speed": 1.89,
          "deg": 324
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-11-01 00:00:00"
      },
      {
        "dt": 1604199600,
        "main": {
          "temp": 25.25,
          "feels_like": 26.39,
          "temp_min": 25.25,
          "temp_max": 25.39,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1001,
          "humidity": 66,
          "temp_kf": -0.14
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 35
        },
        "wind": {
          "speed": 2.63,
          "deg": 331
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-01 03:00:00"
      },
      {
        "dt": 1604210400,
        "main": {
          "temp": 29.43,
          "feels_like": 30.78,
          "temp_min": 29.43,
          "temp_max": 29.48,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1000,
          "humidity": 55,
          "temp_kf": -0.05
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 20
        },
        "wind": {
          "speed": 2.97,
          "deg": 358
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-01 06:00:00"
      },
      {
        "dt": 1604221200,
        "main": {
          "temp": 30.57,
          "feels_like": 32.11,
          "temp_min": 30.57,
          "temp_max": 30.57,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 998,
          "humidity": 54,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.21,
          "deg": 16
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-01 09:00:00"
      },
      {
        "dt": 1604232000,
        "main": {
          "temp": 26.82,
          "feels_like": 29.66,
          "temp_min": 26.82,
          "temp_max": 26.82,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 998,
          "humidity": 72,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.17,
          "deg": 25
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-01 12:00:00"
      },
      {
        "dt": 1604242800,
        "main": {
          "temp": 24.98,
          "feels_like": 28,
          "temp_min": 24.98,
          "temp_max": 24.98,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1001,
          "humidity": 75,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.12,
          "deg": 352
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-11-01 15:00:00"
      },
      {
        "dt": 1604253600,
        "main": {
          "temp": 24.05,
          "feels_like": 26.6,
          "temp_min": 24.05,
          "temp_max": 24.05,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1001,
          "humidity": 77,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 21
        },
        "wind": {
          "speed": 1.48,
          "deg": 345
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-11-01 18:00:00"
      },
      {
        "dt": 1604264400,
        "main": {
          "temp": 23.2,
          "feels_like": 24.76,
          "temp_min": 23.2,
          "temp_max": 23.2,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 999,
          "humidity": 74,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 65
        },
        "wind": {
          "speed": 1.95,
          "deg": 322
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-11-01 21:00:00"
      },
      {
        "dt": 1604275200,
        "main": {
          "temp": 22.16,
          "feels_like": 23.29,
          "temp_min": 22.16,
          "temp_max": 22.16,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 999,
          "humidity": 75,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 45
        },
        "wind": {
          "speed": 2.09,
          "deg": 328
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-11-02 00:00:00"
      },
      {
        "dt": 1604286000,
        "main": {
          "temp": 25.95,
          "feels_like": 27.51,
          "temp_min": 25.95,
          "temp_max": 25.95,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 1002,
          "humidity": 68,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 2.77,
          "deg": 343
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-02 03:00:00"
      },
      {
        "dt": 1604296800,
        "main": {
          "temp": 29.82,
          "feels_like": 31.82,
          "temp_min": 29.82,
          "temp_max": 29.82,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1001,
          "humidity": 58,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.87,
          "deg": 3
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-02 06:00:00"
      },
      {
        "dt": 1604307600,
        "main": {
          "temp": 30.88,
          "feels_like": 33.2,
          "temp_min": 30.88,
          "temp_max": 30.88,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 998,
          "humidity": 56,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.71,
          "deg": 18
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-02 09:00:00"
      },
      {
        "dt": 1604318400,
        "main": {
          "temp": 27.39,
          "feels_like": 30.51,
          "temp_min": 27.39,
          "temp_max": 27.39,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 999,
          "humidity": 72,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 2.17,
          "deg": 42
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-02 12:00:00"
      },
      {
        "dt": 1604329200,
        "main": {
          "temp": 25.51,
          "feels_like": 29.03,
          "temp_min": 25.51,
          "temp_max": 25.51,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1001,
          "humidity": 76,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 0.92,
          "deg": 10
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-11-02 15:00:00"
      },
      {
        "dt": 1604340000,
        "main": {
          "temp": 24.85,
          "feels_like": 28.36,
          "temp_min": 24.85,
          "temp_max": 24.85,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1001,
          "humidity": 79,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 0.93,
          "deg": 347
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-11-02 18:00:00"
      },
      {
        "dt": 1604350800,
        "main": {
          "temp": 23.96,
          "feels_like": 27.02,
          "temp_min": 23.96,
          "temp_max": 23.96,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 999,
          "humidity": 83,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.53,
          "deg": 6
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-11-02 21:00:00"
      },
      {
        "dt": 1604361600,
        "main": {
          "temp": 22.98,
          "feels_like": 25.58,
          "temp_min": 22.98,
          "temp_max": 22.98,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 1000,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 1.92,
          "deg": 344
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-11-03 00:00:00"
      },
      {
        "dt": 1604372400,
        "main": {
          "temp": 26.81,
          "feels_like": 29.22,
          "temp_min": 26.81,
          "temp_max": 26.81,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 1002,
          "humidity": 72,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 2.77,
          "deg": 349
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-03 03:00:00"
      },
      {
        "dt": 1604383200,
        "main": {
          "temp": 30.07,
          "feels_like": 32.94,
          "temp_min": 30.07,
          "temp_max": 30.07,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1001,
          "humidity": 63,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 2.79,
          "deg": 29
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-03 06:00:00"
      },
      {
        "dt": 1604394000,
        "main": {
          "temp": 31.12,
          "feels_like": 34.11,
          "temp_min": 31.12,
          "temp_max": 31.12,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 998,
          "humidity": 58,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 7
        },
        "wind": {
          "speed": 2.34,
          "deg": 23
        },
        "visibility": 10000,
        "pop": 0.47,
        "rain": {
          "3h": 0.43
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-03 09:00:00"
      },
      {
        "dt": 1604404800,
        "main": {
          "temp": 26.48,
          "feels_like": 29.91,
          "temp_min": 26.48,
          "temp_max": 26.48,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 999,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 24
        },
        "wind": {
          "speed": 2.55,
          "deg": 80
        },
        "visibility": 10000,
        "pop": 0.69,
        "rain": {
          "3h": 4.4
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-03 12:00:00"
      },
      {
        "dt": 1604415600,
        "main": {
          "temp": 25.02,
          "feels_like": 29.15,
          "temp_min": 25.02,
          "temp_max": 25.02,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1001,
          "humidity": 85,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 57
        },
        "wind": {
          "speed": 1.05,
          "deg": 118
        },
        "visibility": 10000,
        "pop": 0.03,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-11-03 15:00:00"
      },
      {
        "dt": 1604426400,
        "main": {
          "temp": 24.21,
          "feels_like": 28.27,
          "temp_min": 24.21,
          "temp_max": 24.21,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1000,
          "humidity": 87,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 29
        },
        "wind": {
          "speed": 0.84,
          "deg": 155
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-11-03 18:00:00"
      },
      {
        "dt": 1604437200,
        "main": {
          "temp": 23.67,
          "feels_like": 27.56,
          "temp_min": 23.67,
          "temp_max": 23.67,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 999,
          "humidity": 88,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 0.83,
          "deg": 294
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-11-03 21:00:00"
      },
      {
        "dt": 1604448000,
        "main": {
          "temp": 23.25,
          "feels_like": 26.89,
          "temp_min": 23.25,
          "temp_max": 23.25,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 999,
          "humidity": 89,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 2
        },
        "wind": {
          "speed": 1.02,
          "deg": 349
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-11-04 00:00:00"
      },
      {
        "dt": 1604458800,
        "main": {
          "temp": 26.38,
          "feels_like": 29.85,
          "temp_min": 26.38,
          "temp_max": 26.38,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1002,
          "humidity": 79,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 2.09,
          "deg": 360
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-04 03:00:00"
      },
      {
        "dt": 1604469600,
        "main": {
          "temp": 29.56,
          "feels_like": 33.09,
          "temp_min": 29.56,
          "temp_max": 29.56,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1001,
          "humidity": 66,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 3
        },
        "wind": {
          "speed": 2.07,
          "deg": 26
        },
        "visibility": 10000,
        "pop": 0.11,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-04 06:00:00"
      },
      {
        "dt": 1604480400,
        "main": {
          "temp": 30.54,
          "feels_like": 34.12,
          "temp_min": 30.54,
          "temp_max": 30.54,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 998,
          "humidity": 63,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 34
        },
        "wind": {
          "speed": 2.13,
          "deg": 41
        },
        "visibility": 10000,
        "pop": 0.37,
        "rain": {
          "3h": 1.08
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-04 09:00:00"
      },
      {
        "dt": 1604491200,
        "main": {
          "temp": 26.28,
          "feels_like": 29.78,
          "temp_min": 26.28,
          "temp_max": 26.28,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 998,
          "humidity": 82,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 45
        },
        "wind": {
          "speed": 2.45,
          "deg": 62
        },
        "visibility": 10000,
        "pop": 0.73,
        "rain": {
          "3h": 6.88
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-04 12:00:00"
      },
      {
        "dt": 1604502000,
        "main": {
          "temp": 24.88,
          "feels_like": 28.63,
          "temp_min": 24.88,
          "temp_max": 24.88,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1001,
          "humidity": 84,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 50
        },
        "wind": {
          "speed": 1.35,
          "deg": 95
        },
        "visibility": 10000,
        "pop": 0.2,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-11-04 15:00:00"
      },
      {
        "dt": 1604512800,
        "main": {
          "temp": 24.01,
          "feels_like": 27.93,
          "temp_min": 24.01,
          "temp_max": 24.01,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1000,
          "humidity": 89,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 27
        },
        "wind": {
          "speed": 1.18,
          "deg": 129
        },
        "visibility": 10000,
        "pop": 0.06,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-11-04 18:00:00"
      },
      {
        "dt": 1604523600,
        "main": {
          "temp": 23.45,
          "feels_like": 27.6,
          "temp_min": 23.45,
          "temp_max": 23.45,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 999,
          "humidity": 91,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 2
        },
        "wind": {
          "speed": 0.7,
          "deg": 354
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-11-04 21:00:00"
      },
      {
        "dt": 1604534400,
        "main": {
          "temp": 23.16,
          "feels_like": 26.57,
          "temp_min": 23.16,
          "temp_max": 23.16,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 999,
          "humidity": 91,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 9
        },
        "wind": {
          "speed": 1.55,
          "deg": 357
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-11-05 00:00:00"
      },
      {
        "dt": 1604545200,
        "main": {
          "temp": 26.41,
          "feels_like": 29.84,
          "temp_min": 26.41,
          "temp_max": 26.41,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 1002,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 2.5,
          "deg": 23
        },
        "visibility": 10000,
        "pop": 0.07,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-05 03:00:00"
      },
      {
        "dt": 1604556000,
        "main": {
          "temp": 29.45,
          "feels_like": 32.29,
          "temp_min": 29.45,
          "temp_max": 29.45,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1001,
          "humidity": 68,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 7
        },
        "wind": {
          "speed": 3.37,
          "deg": 70
        },
        "visibility": 10000,
        "pop": 0.22,
        "rain": {
          "3h": 0.19
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-05 06:00:00"
      },
      {
        "dt": 1604566800,
        "main": {
          "temp": 29.59,
          "feels_like": 32.2,
          "temp_min": 29.59,
          "temp_max": 29.59,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 998,
          "humidity": 67,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 48
        },
        "wind": {
          "speed": 3.6,
          "deg": 74
        },
        "visibility": 10000,
        "pop": 0.45,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-05 09:00:00"
      },
      {
        "dt": 1604577600,
        "main": {
          "temp": 26.86,
          "feels_like": 30.26,
          "temp_min": 26.86,
          "temp_max": 26.86,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 999,
          "humidity": 79,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 30
        },
        "wind": {
          "speed": 2.55,
          "deg": 85
        },
        "visibility": 10000,
        "pop": 0.41,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-11-05 12:00:00"
      },
      {
        "dt": 1604588400,
        "main": {
          "temp": 24.5,
          "feels_like": 27.78,
          "temp_min": 24.5,
          "temp_max": 24.5,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1001,
          "humidity": 85,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 69
        },
        "wind": {
          "speed": 1.89,
          "deg": 121
        },
        "visibility": 10000,
        "pop": 0.23,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-11-05 15:00:00"
      },
      {
        "dt": 1604599200,
        "main": {
          "temp": 23.68,
          "feels_like": 27.24,
          "temp_min": 23.68,
          "temp_max": 23.68,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1001,
          "humidity": 89,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 42
        },
        "wind": {
          "speed": 1.44,
          "deg": 57
        },
        "visibility": 10000,
        "pop": 0.19,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-11-05 18:00:00"
      }
    ],
    "city": {
      "id": 1253150,
      "name": "Vinukonda",
      "coord": {
        "lat": 15.91,
        "lon": 79.74
      },
      "country": "IN",
      "population": 61326,
      "timezone": 19800,
      "sunrise": 1604191074,
      "sunset": 1604232673
    }
  }

