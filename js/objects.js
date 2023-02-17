const hourlyWeather = [
    {
        time: "08:00",
        temperature: 78.91,
        feels_like: 78.91
    },
    {
        time: "09:00",
        temperature: 79.57,
        feels_like: 79.57
    },
    {
        time: "10:00",
        temperature: 81.46,
        feels_like: 86.04
    },
    {
        time: "11:00",
        temperature: 84.49,
        feels_like: 89.24
    }
];
// For EACH
hourlyWeather.forEach(hourlyForecast => console.log(hourlyForecast.temperature));
// by time
hourlyWeather.forEach(hourlyForecast => console.log(`At ${hourlyForecast.time}`));

//Object DE-structing object
hourlyWeather.forEach(({time,temperature,feels_like}) =>
    console.log(`At ${time} the temp will be  ${temperature}`))
// For Loop
for (let i = 0; i < hourlyWeather.length; i++){
    console.log(hourlyWeather[1].temperature);
}
// Spread Operator
hourlyWeather.forEach(function({time, ...rest}) {
    console.log(rest);
});
// FOR ...OF LOOP rto loop through Array
for (const forecast of hourlyWeather){
    console.log(forecast.temperature);
}

const myString ="randyhidalgo";
for (const letter of myString) console.log(letter);

