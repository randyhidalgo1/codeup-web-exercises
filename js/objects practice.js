// /**
//  * Convert Address to Object
//  * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
//  *
//  * Examples
//  *
//  * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
//  * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
//  **/
//
// const addr1 = '8446 Sunny Oaks';
// const addr2 = '5408 Villa Nueva';
// const addr3 = '44 Main Street';
// const addr4 = '9742 Trinity Oaks';
//
// function convertAddressToObject(address) {
//     const indexOfSpace = address.indexOf(' ' )
//     const streetNumber = address.substring(0, indexOfSpace)
//     const streetName = address.substring(indexOfSpace + 1);
//     return{
//         streetNumber: streetNumber,
//         streetName: streetName,
//     }
// }



/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */
const personsArray = [
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2}
]
// function  totalPets (personsArray) {
//     let totalPets = 0;
//     for (let i = 0; i < personsArray.length; i++) {
//         totalPets += personsArray[i].pets
//     }
//     return totalPets;
// }

// OR another example

function totalPets(personsArray) {
    let total = 0;
    personsArray.forEach(person => total += person.pets);
    return total;
}

/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */


/**
 * Drink Sorting
 * You will be given an array of drinks, with each drink being an object with two properties: name and price.
 * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
 *
 * Assume that the following array of drink objects needs to be sorted:
 * drinks = [
 *     {name: "lemonade", price: 50},
 *     {name: "lime", price: 10}
 * ]
 *
 * Examples
 * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 */