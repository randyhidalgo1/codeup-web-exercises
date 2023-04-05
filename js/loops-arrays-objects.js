// Write a function named checkForNumber that accepts
// an argument and returns a string 'number' or
// "not a number" based on whether the input is a number.
// checkForNumber(-1) // "number"
// checkForNumber(0) // "number"
// checkForNumber(6) // "number"
// checkForNumber() // "not a number"
// checkForNumber("hello") // "not a number"
// checkForNumber("777") // "not a number"

let checkForNumber = function (input) {
    if (typeof input === "number") {
        return "number";
    } else {
        return "not a number";
    }

}


// Write a function named evenOrOdd that returns
// the string "even" or "odd" when passed a numeric
// argument. The resulting string should represent
// whether the number is even or odd.
//
// evenOrOdd(20) // "even"
// evenOrOdd(0) // "even"
// evenOrOdd(-28) // "even"
// evenOrOdd("22") // "even"
// evenOrOdd(5) // "odd"
// evenOrOdd(-93) // "odd"
// evenOrOdd("37") // "odd"

let evenOrOdd = function (num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}


// Write a function named doubleTheElements that
// accepts an array of numbers and returns an array
// with double the value of each number.
//
// doubleTheElements([7, 8, 9, 10]) // [14, 16, 18, 20]
// doubleTheElements([1, 2, 3]) // [2, 4, 6]
// doubleTheElements([9, -9, 9.2]) // [18, -18, 18.4]

let doubleTheElements = function (array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2);
    }
    return newArray;
}

// Write a function named sumOfElements that accepts
// an array of numbers and returns the sum of those
// numbers.
//
// sumOfElements([1, 2, 3]) // 6
// sumOfElements([4, 6, 8, 10, 12]) // 40
// sumOfElements([1, .5]) // 1.5

let sumOfElements = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// Write a function named totalPrice that accepts
// an array of objects where each object represents
// a product from a store, that has a price property.
// The function should return the total of every
// object's price property.
//
// totalPrice([
//     {name: 'tomatoes', price: 4},
//     {name: 'potatoes', price: 6},
//     {name: 'wine', price: 16},
// ])
// returns 26

let totalPrice = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].price;
    }
    return sum;
}


// Write a function named findHighestPrice that accepts
// an array of objects where each object represents a
// product from a store, that has a price property.
// The function should return the highest price value
// from the array. findHighestPrice.
//
// findHighestPrice([
//     {name: 'tomatoes', price: 4},
//     {name: 'potatoes', price: 6},
//     {name: 'wine', price: 16},
// ])
// returns 16

let findHighestPrice = function (array) {
    let highestPrice = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i].price > highestPrice) {
            highestPrice = array[i].price;
        }
    }   return highestPrice;
}


// Write a function named discountCheck. The function
// should accept an object that represents a customer's ' +
// 'transaction. The object passed into the function ' +
// 'should have customerName, items, and clubMember ' +
// 'properties. A customer will qualify for a discount if ' +
// 'they have a total from the items property of 150 or ' +
// 'greater, or if they are a club member. discountCheck' +
// ' should return a boolean representing whether the ' +
// 'customer described by the object qualifies for a ' +
// 'discount.
//
// HINT: The totalPrice function may be used to calculate
// the total price of the items by passing in the array of
// items.
// discountCheck({
//     customerName: "Barbara",
//     items: [
//         {name: 'tomatoes', price: 4},
//         {name: 'potatoes', price: 6},
//         {name: 'wine', price: 16},
//     ],
//     clubMember: true
// });
// // true
//
// discountCheck({
//     customerName: "Dale",
//     items: [
//         {name: 'television', price: 400},
//         {name: 'xbox', price: 599},
//         {name: 'soda', price: 1},
//     ],
//     clubMember: false
// });
// // true
//
// discountCheck({
//     customerName: "Kenneth",
//     items: [
//         {name: 'doughnuts', price: 7},
//         {name: 'apple juice', price: 3},
//         {name: 'bird seed', price: 13},
//     ],
//     clubMember: false
// });
// false

let discountCheck = function (object) {
    if (totalPrice(object.items) >= 150 || object.clubMember === true) {
        return true;
    } else {
        return false;
    }
}

// Write a function named newProduct with two parameters,
//     a string that contains a name, and a number
// representing the product's price, and returns an object' +
// ' with properties name and price.
//
// newProduct('tomatoes', 3.99) // {name: 'tomatoes', price: 3.99}
// newProduct('Yu-Gi-Oh Booster Pack', 5.89) // {name: 'Yu-Gi-Oh

let newProduct = function (string, number) {
    return {name: string, price: number};
}

// Write a function named countWords that accepts a string
// and returns the number of words in that string.
//
// countWords('Hello, Codeup!') // 2
// countWords('The quick brown fox jumps over the lazy dog!')

function countWords (string) {
    if (string === '') {
        return 0;
    } else {
        return string.split(" ").length;
    }
}

// Write a function named describeNumber that takes in an
// integer and will return an object describing different
// features of the input as a number. If the input is a
// number, the object should have three properties: value
// for the value passed, evenOrOdd which should be a string
// to identify whether the passed argument is evenly
// divisible by 2, and numberOfDigits which should count
// the number of digits in the argument passed into the
// function: describeNumber(45) // {value: 45, evenOrOdd: "odd", numberOfDigits: 2};
// describeNumber(360) // {value: 360, evenOrOdd: "even", numberOfDigits: 3};
// describeNumber(0) // {value: 0, evenOrOdd: "even", numberOfDigits: 1};
// describeNumber("123") // {value: 123, evenOrOdd: "odd", numb


// function describeNumber (integer) {
//     let object = {};
//     object.value = integer;
//     if (integer % 2 === 0) {
//         object.evenOrOdd = "even";
//     }
//
// }

// function describeNumber(num) {
//     let result = {
//     value: num,
//     evenOrOdd: num % 2 === 0 ? 'even' : 'odd',
//     numberOfDigits: num.toString().length
// }; if (typeof num !== "number") {
//         result = Number(num);
//     }
//     return result;
// }

// function describeNumber(num) {
//     const result = {};
//     if (typeof num !== "number") {
//         num = Number(num);
//     }
//     result.value = num;
//     if (num % 2 === 0) {
//         result.evenOrOdd = "even";
//     } else {
//         result.evenOrOdd = "odd";
//     }
//     result.numberOfDigits = num.toString().length;
//
//     return result;
// }

function describeNumber(input) {
    const value = parseInt(input);
    const evenOrOdd = (value % 2 === 0) ? 'even' : 'odd';
    const numberOfDigits = input.toString().length;

    return {value, evenOrOdd, numberOfDigits};
}

// Write a function named screamingSnakeCase that accepts
// a string that has several words each separated by a
// space, and returns a string with each word in all caps,
//     and with the spaces replaced by underscores
// (ex. SCREAMING_SNAKE_CASE).
//
// screamingSnakeCase('Lord Palmerston') // "LORD_PALMERSTON"
// screamingSnakeCase('pitt the elder') // "PITT_THE_ELDER"
// screamingSnakeCase('99 BaRRels Of rOOt BEeR oN ThE WaLL') // "99_BARRELS_OF_ROOT_BEER_ON_THE_WALL"
// screamingSnakeCase('The quick brown fox jumped over the lazy dog

function screamingSnakeCase(string) {
    return string.toUpperCase().split(" ").join("_");

}