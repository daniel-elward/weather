import thunderImage from "./images/snowflake.png";

export function populateLocation(foo){
    const location = document.querySelector(".location");

    location.innerHTML = `${foo}`;
};

export function populateCurrent(foo){
    const current = document.querySelector(".currentWeather");

    current.innerHTML = `${foo}`; 
};

export function populateForecast(returnedObject){
    const cardWrapper = document.querySelector(".cardWrapper");

    createDiv("forecastCard", cardWrapper);
        const forecastCard = document.querySelector(".forecastCard");

    createElement("date", forecastCard, "h1");
        const date = document.querySelector(".date");
            date.innerHTML = returnedObject.days[1].datetime;

    createElement("test", forecastCard, "h2");
        const test = document.querySelector(".test")
            test.innerHTML = returnedObject.days[1].feelslike;

    createDiv("mainForecastIcon", forecastCard);
        const card = document.querySelector(".mainForecastIcon");

    createElement("cardIcon", card, "img");
        const img = document.querySelector(".cardIcon");
            img.src = thunderImage;
                img.width = "80";
                img.height = "80";

    createDiv("tempRange", forecastCard);
        const range = document.querySelector(".tempRange");
            createElement("tempLow", range, "p");
                const lowP = document.querySelector(".tempLow");
                    lowP.innerHTML = `lows of ${returnedObject.days[1].tempmin}`
            createElement("tempHigh", range, "p");
                const highP = document.querySelector(".tempHigh");
                    highP.innerHTML = `lows of ${returnedObject.days[1].tempmax}`

};

function createDiv(title, target){
    const div = document.createElement("div");
        div.classList.add(title);
            target.appendChild(div);
};

function createElement(name, target, type){
    const element = document.createElement(type); //type = h1, p etc
        element.classList.add(name);
            target.appendChild(element);
};

/*

<div class="forecastCard">
    <h1>Mon</h1>
        <h2>55th July</h2>
            <div class="mainForecastIcon">
                <img src="./images/snow.png" width="80px" height="80px">
            </div>
                <div class="tempRange">
                    <p>lows of 2</p>
                    <p>highs of 5</p>
                </div>

*/