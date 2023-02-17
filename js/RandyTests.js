
// --Random Numbers Code
// function arrayOfRandomNumbers(lengthOfArray){
//     const array = [];
//     for (let i = 0; i < lengthOfArray; i++){
//         let newRandomNumber = randomNumber(1, lengthOfArray +100);
//         while(array.includes(newRandomNumber)){
//             newRandomNumber = randomNumber(1, 100);
//         }
//
//         array.push(newRandomNumber);
//     }
//     return array
// }

//--Object Literal! KEY & VALUE (Temp = key (temp), num/str = value (54.4) -they are variables)
const currentWeather = {
    temperature: 54.4,
    humidity: 28,
    clouds: 0,
    windDirection: "NNE"
}
console.log("The current Weather is".temperature);



//console.log(currentWeather) for ALL
//To access object .notation ex: currentWeather.clouds
//console.log(currentWeather.clouds)

// function displayWeatherProperty(prop){
//     console.log(currentWeather[prop]); //Bracket notation
// }

