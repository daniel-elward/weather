import {userSearch} from "./index.js";

export async function apiRequest(queryLocation){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${queryLocation}?unitGroup=metric&include=days%2Chours%2Ccurrent%2Cevents%2Calerts&key=LB6J72DBNZFB2HL6GXP3Q28CW&contentType=json`);
    const weatherData = await response.json();
    
    return weatherData;
};