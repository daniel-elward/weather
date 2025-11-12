import "./style.css";

import {} from "./api.js"

function userSearch(){
    const form = document.querySelector(".userSearch");
    const submit = document.getElementById("submitButton");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const result = new FormData(form, submit);
        const userSearch = result.get("search")

        document.querySelector(".resultsBody").style.display = "grid"
    });
};

userSearch();