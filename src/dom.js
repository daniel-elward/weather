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

    createElement("day", forecastCard, "h1");
        const dayDOM = document.querySelector(".day");

            const daysArray = ["Sun", "Mon", "Tue", "Wed", 
                          "Thu", "Fri", "Sat"];

            const datetime = returnedObject.days[0].datetime;
            const dateObj = new Date(datetime)
            const day = dateObj.getDay();

            dayDOM.innerHTML = daysArray[day];

    // come back to this and look at a date library to make
    // the code better
    createElement("date", forecastCard, "h2");
        const dateDOM = document.querySelector(".date");

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
                    dateDOM.innerHTML = `${dayArray[date]} ${monthArray[month]} ${year}`;


    createElement("feels", forecastCard, "p");
        const foo = document.querySelector(".feels")
            foo.innerHTML = `Feels like ${returnedObject.days[0].feelslike}`;

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
                    lowP.innerHTML = `lows of ${returnedObject.days[0].tempmin}`
            createElement("tempHigh", range, "p");
                const highP = document.querySelector(".tempHigh");
                    highP.innerHTML = `lows of ${returnedObject.days[0].tempmax}`

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