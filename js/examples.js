
// let myName = "randy"
// let nameLength = myName.length;
//
// if (nameLength === 5) {
//     alert("Exactly")
// } else if (nameLength >=5) {
//     alert("Over 5")
// } else  {
//     alert("under 5");
// }
//
// let x = 10;
//
// while (x <=100) {
//     console.log(`"Speed of the car is ${x} MPH"`);
//     x += 10;
// }
//
// let a = 1;
// let b = 10;
// do {
//     console.log(`The number is ${a}`);
//     a++;
// } while (a <= b)


// Note: Arrays
// let fruits = ["apple", "orange", "banana"];
// console.log(fruits.unshift("cherry", "pineapple",));
// console.log(fruits.push("plum", "grapes",))
// console.log(fruits.splice(3, 1, "lemon"));
// fruits.sort();
// console.log (fruits)
//
// let firstName= ["Randy"];
// let course= ["Javascript"];
// let channel = ["Dev Dreamer"];
// let info= `${firstName} is learning ${course} with ${channel}.`
// console.log(info);
//
const cities = [
    {
        name: "New York City",
        state: "New York",
        population: 8336817
    },
    {
        name: "Los Angeles",
        state: "California",
        population: 3979576
    },
    {
        name: "Chicago",
        state: "Illinois",
        population: 2693976
    },
    {
        name: "Houston",
        state: "Texas",
        population: 2320268
    },
    {
        name: "Phoenix",
        state: "Arizona",
        population: 1680992
    },
    {
        name: "Philadelphia",
        state: "Pennsylvania",
        population: 1584064
    },
    {
        name: "San Antonio",
        state: "Texas",
        population: 1547253
    },
    {
        name: "San Diego",
        state: "California",
        population: 1423851
    },
    {
        name: "Dallas",
        state: "Texas",
        population: 1343573
    },
    {
        name: "San Jose",
        state: "California",
        population: 1030119
    },
    {
        name: "Austin",
        state: "Texas",
        population: 964254
    },
    {
        name: "Jacksonville",
        state: "Florida",
        population: 903889
    },
    {
        name: "Fort Worth",
        state: "Texas",
        population: 895008
    },
    {
        name: "Columbus",
        state: "Ohio",
        population: 892533
    },
    {
        name: "San Francisco",
        state: "California",
        population: 883305
    },
    {
        name: "Charlotte",
        state: "North Carolina",
        population: 885708
    },
    {
        name: "Indianapolis",
        state: "Indiana",
        population: 876384
    },
    {
        name: "Seattle",
        state: "Washington",
        population: 753675
    },
    {
        name: "Denver",
        state: "Colorado",
        population: 727211
    },
    {
        name: "Washington",
        state: "District of Columbia",
        population: 702455
    }
]

for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    if (city.state === "Texas" && city.population > 1000000) {
        console.log(city.name)
    }
}
// function isInTexas(cityOject) {
//     if (city.state === 'Texas') {
//         return true;
//     } else {
//         return false
//     }
// }
// //
// cities.forEach(city => {
//     console.log(`${city.name}, ${city.state}`);
// });


/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */

// const people = [
//             { name: "John",
//             age: 21,
//             budget: 23000
//             },
//             { name: "Steve",
//             age: 32,
//             budget: 40000
//             },
//             { name: "Martin",
//             age: 16,
//             budget: 2700
//             },
// ]
// function getBudget(array){
//     let totalBudget = 0;
//     array.forEach(people => {
//         console.log(`${people.name}, ${people.budget}`);
//     }
