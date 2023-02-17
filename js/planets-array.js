(function() {
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    const theSun = planets.unshift("The Sun");
    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    const pluto = planets.push("Pluto");
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);

    const removeSun = planets.splice("The Sun", 1)
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    const removePluto = planets.pop("pluto")
    console.log('Removing "Pluto" from the end of the planets array.'); console.log(planets);

    let earth = planets.indexOf("Earth");
    console.log(earth);
    console.log('Finding and logging the index of "Earth" in the planets array.');

    const reverse =planets.reverse();
    console.log("Reversing the order of the planets array.");
    console.log(planets);

    const sort =planets.sort();
    console.log("Sorting the planets array.");
    console.log(planets);

 })();



//NOTES:
// const dayOfWeek = ["Monday", "Tuesday", "Wednesday", 'Thursday', "Friday", "Saturday", "Sunday"]
// const myName = "Randy"
// const sPosition = myName.indexOf("s");
// // console.log(sPosition)
// const myNameArray = myName.split("");
// console.log(myNameArray)
//
//const daysOfWeek = ["Monday", "Tuesday", "Wednesday", 'Thursday', "Friday", "Saturday", "Sunday"]
//const Thursday = daysOfWeek.indexOf("Thursday");
// console.log(Thursday);
//
//const removeSundy = daysOfWeek.pop();
// console.log(daysOfWeek)
// console.log(removeSunday);
//
//const removeFirst = daysOfWeek.shift();
// console.log(daysOfWeek);
// console.log(removeFirst)


//SLICING
// const firsthalf = daysOfWeek.slice (0, 2);
// console.log(daysOfWeek);
// console.log(firsthalf)

//removing an item in the middle
//const dayOfWeek = ["Monday", "Tuesday", "Wednesday", 'Thursday', "Friday", "Saturday", "Sunday"]
//const indexOfThursday = dayOfWeek.indexOf("Thursday");
// //console.log(daysOfWeek);
//const lastHalf = daysOfWeek.slice(indexOfThursday + 1);
// console.log(lastHalf)
// daysOfWeek = daysOfWeek.slice(0, indexOfThursday).join(`,`) + `,`;
// console.log(daysOfWeek)
// daysOfWeek += lastHalf.join (`,`);
// console.log(daysOfWeek)
// daysOfWeek = daysOfWeek.split(`,`);
// console.log(daysOfWeek)


//SPREAD OPERATOR
// daysOfWeek = [
//     ... firstHalf,
//     ...lastHalf,
//     "Merrelday"
//console.log(dayOfWeek)
// ]

//daysOfWeek.splice(indexOfThursday, 1, "Merrelday")
//console.log(daysOfWeek)
//
// const removedDay = daysOfWeek.splice(indexOfThursday)
// console.log(daysOfWeek);
// console.log(removedDay)

// const dayOfWeek = ["Monday", "Tuesday", "Wednesday", 'Thursday', "Friday", "Saturday", "Sunday"]
// //How to sort
// console.log(dayOfWeek.sort());
// //or reversed
// console.log(dayOfWeek.reverse());
// //push
// console.log(dayOfWeek.push());
// dayOfWeek.push(`Randy Day`);
// //or unshift
// dayOfWeek.unshift(`Randy Day`);
// let stringDays = 'Monday"|"Tuesday"| "Wednesday"| "Thursday"| "Friday"| "Saturday"| "Sunday";
// let arrayDays = stringDays.split('|');
// console.log(arrayDays)


