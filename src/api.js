import {userSearch} from "./index.js";

export async function apiRequest(queryLocation){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${queryLocation}/?key=LB6J72DBNZFB2HL6GXP3Q28CW`);
    const weatherData = await response.json();
    
    return weatherData;
};

// apiRequest(foo).then(result => {
//     // do things with the result here
//     console.log(result);

//     return result;
// })