import tempImage from "./images/temp.png";

// This was image handling code was taken from an AI overview.
// I couldn't work out how to get all my images imported.

const images = require.context('./images', false, /\.(png|jpe?g|gif|svg)$/);
const imageMap = {};

images.keys().forEach((item) => {
    const imageName = item.replace('./', ''); // Get filename
    imageMap[imageName] = images(item);
});

// console.log(imageMap);

export function populateLocation(returnedObject){
    const location = document.querySelector(".location");
        createElement("locationHeading", location, "h1");
            const locationHeader = document.querySelector(".locationHeading");
                locationHeader.innerHTML = returnedObject.resolvedAddress;
};

export function populateCurrent(returnedObject){
    const current = document.querySelector(".currentWeather");

    createElement("nextHour", current, "h1");
        const next = document.querySelector(".nextHour");
            next.innerHTML = "Now";

    createElement("day", current, "h2");
                const dayDOM = document.querySelector(".day");

                    const daysArray = ["Sunday", "Monday", "Tueday", "Wednesday", 
                                "Thursday", "Friday", "Saturday"];

                    const datetime = returnedObject.days[0].datetime;
                    const dateObj = new Date(datetime)
                    const day = dateObj.getDay();

                    dayDOM.innerHTML = daysArray[day];

    createElement("date", current, "h2");
                const dateDOM = document.querySelector(".date");

                const monthArray = ["January", "February", "March", "April", "May", 
                                    "June", "July", "August", "September", "October", 
                                    "November", "December"]
                const dayArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", 
                                "11", "12", "13", "14", "15", "16", "17", "18", "19", 
                                "20", "21", "22", "23", "24", "25", "26", "27",  "28", 
                                "29", "30", "31"];

                const date = dateObj.getDate();
                    const month = dateObj.getMonth();
                            dateDOM.innerHTML = `${dayArray[date]} ${monthArray[month]}`;

    createDiv("currentWeatherIcon", current);
        const icon = document.querySelector(".currentWeatherIcon");
            createElement("currentIcon", icon, "img");
                const icon2 = document.querySelector(".currentIcon");
                    icon2.src = imageMap[`${returnedObject.currentConditions.icon}.svg`];
                        icon2.width = 130;
                            icon2.height = 130;

    createDiv("currentTemp", current);
        const temp = document.querySelector(".currentTemp");
            createElement("cTemp", temp, "h2");
                const cTemp = document.querySelector(".cTemp");
                    cTemp.innerHTML = `${returnedObject.currentConditions.temp} &degc`;
    
    createElement("feelsLike", current, "p");
        const feelsLikeDOM = document.querySelector(".feelsLike");
            feelsLikeDOM.innerHTML = `feels like ${returnedObject.currentConditions.feelslike}`;

    createDiv("fallAmounts", current);
        const amountsDOM = document.querySelector(".fallAmounts");
            createElement("snow", amountsDOM, "p");
            createElement("rain", amountsDOM, "p");
                const snow = document.querySelector(".snow")
                const rain = document.querySelector(".rain")
                    snow.innerHTML = returnedObject.currentConditions.snow
                    rain.innerHTML = returnedObject.currentConditions.precip
                        createElement("snowAmount", snow, "img");
                        createElement("rainAmount", rain, "img");
                            const snowAmountDOM = document.querySelector(".snowAmount");
                            const rainAmountDOM = document.querySelector(".rainAmount");
                                snowAmountDOM.src = imageMap["snowFlake.png"];
                                snowAmountDOM.width = 30;
                                snowAmountDOM.height = 30;
                                    rainAmountDOM.src = imageMap["rainDrop.png"];
                                    rainAmountDOM.width = 30;
                                    rainAmountDOM.height = 30;
};

export function populateForecast(returnedObject){

    const forecastDOM = document.querySelector(".forecast");
    
    createElement("forecastTitle", forecastDOM, "h1");
        const title = document.querySelector(".forecastTitle");
            title.innerHTML = "8-Day Forecast";

    const cardWrapper = document.querySelector(".cardWrapper");
    if(cardWrapper != null){cardWrapper.remove()};

    createDiv("cardWrapper", forecastDOM);
        const card = document.querySelector(".cardWrapper");

    
    // 2 and 16 sets the 8 day forecast to start 'tomorrow'
    for (let i = 2; i < 10; i++) {
        const cardWrapper = document.querySelector(".cardWrapper");

        createDiv(`forecastCard${i}`, cardWrapper);
                const forecastCard = document.querySelector(`.forecastCard${i}`);

            createElement("day", forecastCard, "h1");
                const dayDOM = forecastCard.querySelector(".day");

                    const daysArray = ["Sun", "Mon", "Tue", "Wed", 
                                "Thu", "Fri", "Sat"];

                    const datetime = returnedObject.days[i].datetime;
                    const dateObj = new Date(datetime)
                    const day = dateObj.getDay();

                    dayDOM.innerHTML = daysArray[day];

            // come back to this and look at a date library to make
            // the code better
            createElement("date", forecastCard, "h2");
                const dateDOM = forecastCard.querySelector(".date");

                const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", 
                                    "Jun", "Jul", "Aug", "Sep", "Oct", 
                                    "Nov", "Dec"]
                const dayArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", 
                                "11", "12", "13", "14", "15", "16", "17", "18", "19", 
                                "20", "21", "22", "23", "24", "25", "26", "27",  "28", 
                                "29", "30", "31"];

                const date = dateObj.getDate();
                    const month = dateObj.getMonth();
                        const year = dateObj.getFullYear();
                            dateDOM.innerHTML = `${dayArray[date - 1]} ${monthArray[month]} ${year}`;


            createElement("feels", forecastCard, "p");
                const foo = forecastCard.querySelector(".feels")
                    foo.innerHTML = `Feels like ${returnedObject.days[i].feelslike}&degc`;

            createDiv("mainForecastIcon", forecastCard);
                const card = forecastCard.querySelector(".mainForecastIcon");

            createElement("cardIcon", card, "img");
                const img = forecastCard.querySelector(".cardIcon");
                    img.src = imageMap[`${returnedObject.days[i].icon}.svg`];
                        img.width = "80";
                        img.height = "80";

            createDiv("tempRange", forecastCard);
                const range = forecastCard.querySelector(".tempRange");
                    createElement("tempLow", range, "p");
                        const lowP = forecastCard.querySelector(".tempLow");
                            lowP.innerHTML = `lows of ${returnedObject.days[i].tempmin}&degc`
                    createElement("tempHigh", range, "p");
                        const highP = forecastCard.querySelector(".tempHigh");
                            highP.innerHTML = `highs of ${returnedObject.days[i].tempmax}&degc`
    };
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

