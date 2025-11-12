async function apiRequest(queryLocation){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${queryLocation}/?key=LB6J72DBNZFB2HL6GXP3Q28CW`);
    const weatherData = await response.json();
    
    return weatherData;
};

apiRequest("hartland, NB").then(result => {
    // do things with the result here
    console.log("From inside the func");
    console.log(result);

    return result;
})