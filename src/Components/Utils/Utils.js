const baseUrl = 'https://us-central1-weather-app-9d078.cloudfunctions.net/searchLocation/';

export function getCurrentLocationDataFromUser(fn, defaultFn) {
  if (typeof fn !== 'function') {
    throw new Error(`expected function instead gor ${typeof fn}`);
  }
  if (typeof defaultFn !== 'function') {
    throw new Error(`expected function instead gor ${typeof defaultFn}`);
  }

  return navigator.geolocation.getCurrentPosition(
    (data) => fn(data),
    () => {
      defaultFn();
    },
  );
}

export async function getLocationFromIp() {
  /**
   * TODO: update the base url once development done
   */
  const locationObj = await fetch(`${baseUrl}ip`)
    .then((data) => data.json())
    .catch((data) => data.json());

  console.log(locationObj);
  return locationObj;
}

export async function getCurrentWeather(lat = '', lon = '', zip = '', q = '') {
  try {
    const currentWeatherData = await fetch(
      `${baseUrl}location?q=${q}&zip=${zip}&lat=${lat}&lon=${lon}`,
    )
      .then((data) => data.json())
      .catch((data) => data.json());
    return currentWeatherData;
  } catch {
    return { message: 'Failed to fetch data' };
  }
}

export async function getWeatherDataByLatLon(lat, lon) {
  try {
    const weatherByLatLon = await fetch(
      `${baseUrl}forecast30?lat=${lat}&lon=${lon}`,
    )
      .then((data) => data.json())
      .catch((data) => data.json());

    return weatherByLatLon;
  } catch {
    return { message: 'Failed to fetch data' };
  }
  // return hardCodedWeatherJSON;
}

export async function getCurrentWeatherData(name, zip, lat, lon) {
  try {
    const weatherByLatLon = await fetch(
      `${baseUrl}currentweather?q=${name}&zip=${zip}&lat=${lat}&lon=${lon}`,
    )
      .then((data) => data.json())
      .catch((data) => data.json());

    return weatherByLatLon;
  } catch {
    return { message: 'Failed to fetch data' };
  }
}
