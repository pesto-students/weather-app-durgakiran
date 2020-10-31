export function getCurrentLocationDataFromUser() {
    return navigator.geolocation.getCurrentPosition(
        (data) => console.log("success", data),
        (error) => {console.log("error", error)},
    );
}

export function getWeatherData() {
    
}

