import "./style.css";
import {apiRequest} from "./api.js"
import {populateLocation, populateCurrent, populateForecast} from "./dom.js";

export function userSearch(){
    const form = document.querySelector(".userSearch");
    const submit = document.getElementById("submitButton");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const result = new FormData(form, submit);
        const userSearch = result.get("search")

        console.log(userSearch);

        // document.querySelector(".resultsBody").style.display = "grid"

        apiRequest(userSearch).then(result => {
            // do things with the result here
            console.log(result);

            populateLocation(result.resolvedAddress);
            // populateCurrent(result.currentConditions.conditions)
            // populateForecast(result.days)

            return result;
        })
        
    });
};

userSearch();

// populateResults("test", "test2", "test3")