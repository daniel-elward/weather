import tempImage from "./images/temp.png";

export function populateLocation(returnedObject){
    const location = document.querySelector(".location");
        createElement("locationHeading", location, "h1");
            const locationHeader = document.querySelector(".locationHeading");
                locationHeader.innerHTML = returnedObject.resolvedAddress;
};

export function populateCurrent(foo){
    const current = document.querySelector(".currentWeather");

    current.innerHTML = `${foo}`; 
};

export function populateForecast(returnedObject){
    const cardWrapper = document.querySelector(".cardWrapper");
    const forecastNodeList = returnedObject.days;

    // 2 and 16 sets the 8 day forecast to start 'tomorrow'
    for (let i = 2; i < 10; i++) {

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
                    img.src = tempImage;
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

/*


<div class="dateTime"><p>Tuesday</p><p>15:34</p></div>
<div class="currentWeatherIcon">
    <img src="./images/thunder.png" width="160px" height="160px">
</div>
    <div class="currentTemp"><h2>2c</h2></div>
        <p class="feelsLike">feels like -1c</p>
            <div class="fallAmounts">
                <p><img src="./images/snowflake.png" width="20px" height="20px">  1cm - 3cm </p>
                <p><img src="./images/drop.png" width="20px" height="20px"> ~ 1cm</p>
            </div>

*/