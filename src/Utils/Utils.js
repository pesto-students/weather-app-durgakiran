const base_url =
  "https://us-central1-weather-app-9d078.cloudfunctions.net/searchLocation/";

export function getCurrentLocationDataFromUser(fn, defaultFn) {
  if (typeof fn !== "function") {
    throw new Error(`expected function instead gor ${typeof fn}`);
  }
  if (typeof defaultFn !== 'function') {
    throw new Error(`expected function instead gor ${typeof defaultFn}`);
  }

  return navigator.geolocation.getCurrentPosition(
    (data) => fn(data),
    (error) => {
      defaultFn();
    }
  );
}

export async function getLocationFromIp() {
  /**
   * TODO: update the base url once development done
   */
  const locationObj = await fetch(`${base_url}ip`)
    .then((data) => data.json())
    .catch((data) => data.json());

  console.log(locationObj);
  return locationObj;
}

export async function getTodaysWeather(type, units, value) {
  let results;
  switch (type) {
    case "name":
      // results = await fetch(`${base_url}today?name`)
      break;

    case "zip":
      break;

    default:
      break;
  }
}

export async function getCurrentWeather(lat = '', lon = '', zip = '', q = '') {
  const currentWeatherData = await fetch(
    `${base_url}location?q=${q}&zip=${zip}&lat=${lat}&lon=${lon}`
  )
    .then((data) => data.json())
    .catch((data) => data.json());
  return currentWeatherData;
}

export async function getWeatherDataByLatLon(lat, lon) {
  const weatherByLatLon = await fetch(
    `${base_url}forecast30?lat=${lat}&lon=${lon}`
  )
    .then((data) => data.json())
    .catch((data) => data.json());

  return weatherByLatLon;
  // return hardCodedWeatherJSON;
}

export async function getCurrentWeatherData(name, zip, lat, lon) {
  const weatherByLatLon = await fetch(
    `${base_url}currentweather?q=${name}&zip=${zip}&lat=${lat}&lon=${lon}`
  )
    .then((data) => data.json())
    .catch((data) => data.json());

  return weatherByLatLon;
}
