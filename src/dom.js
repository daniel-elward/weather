export function populateLocation(foo){
    const location = document.querySelector(".location");

    location.innerHTML = `${foo}`;
};

export function populateCurrent(foo){
    const current = document.querySelector(".currentWeather");

    current.innerHTML = `${foo}`; 
};

export function populateForecast(foo){
    const forecast = document.querySelector(".forecast");

    forecast.innerHTML = `${foo}`; 
};