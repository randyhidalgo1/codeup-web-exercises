// Write a function named discountCheck. The function should accept an
// object that represents a customer's transaction. The object passed into the function should have customerName, items, and clubMember properties. A customer will qualify for a discount if they have a total from the items property of 150 or greater, or if they are a club member. discountCheck should return a boolean representing whether the customer described by the object qualifies for a discount.

function discountCheck(transaction) {
    let total = 0;
    transaction.items.forEach(function (item) {
        total += item.price;
    });
    return total >= 150 || customer.clubMember;
}



//
//
//
// W
// Write a function named checkForNumber that accepts an argument and returns a string 'number' or "not a number" based on whether the input is a number.
//nt
// checkForNumber(-1) // "number"
// checkForNumber(0) // "number"
// checkForNumber(6) // "number"
// checkForNumber() // "not a number"
// checkForNumber("hello") // "not a number"
// checkForNumber("777") // "not a number"
// Write a function named evenOrOdd that returns the string "even" or "odd" when passed a numeric argument. The resulting string should represent whether the number is even or odd.
//
// evenOrOdd(20) // "even"
// evenOrOdd(0) // "even"
// evenOrOdd(-28) // "even"
// evenOrOdd("22") // "even"
// evenOrOdd(5) // "odd"
// evenOrOdd(-93) // "odd"
// evenOrOdd("37") // "odd"
//
// Write a function named doubleTheElements that accepts an array of numbers and returns an array with double the value of each number.
//
// doubleTheElements([7, 8, 9, 10]) // [14, 16, 18, 20]
// doubleTheElements([1, 2, 3]) // [2, 4, 6]
// doubleTheElements([9, -9, 9.2]) // [18, -18, 18.4]
//
// Write a function named sumOfElements that accepts an array of numbers and returns the sum of those numbers.
//
// sumOfElements([1, 2, 3]) // 6
// sumOfElements([4, 6, 8, 10, 12]) // 40
// sumOfElements([1, .5]) // 1.5
// Write a function named totalPrice that accepts an array of objects where each object represents a product from a store, that has a price property. The function should return the total of every object's price property.
//
// totalPrice([
//     {name: 'tomatoes', price: 4},
//     {name: 'potatoes', price: 6},
//     {name: 'wine', price: 16},
// ])
// // returns 26
//
// Write a function named findHighestPrice that accepts an array of objects where each object represents a product from a store, that has a price property. The function should return the highest price value from the array. findHighestPrice.
//
// findHighestPrice([
//     {name: 'tomatoes', price: 4},
//     {name: 'potatoes', price: 6},
//     {name: 'wine', price: 16},
// ])
// // returns 16
// HINT: The totalPrice function may be used to calculate the total price of the items by passing in the array of items.
//
// discountCheck({
//     customerName: "Barbara",
//     items: [
// items: [
//     {name: 'tomatoes', price: 4},
//     {name: 'potatoes', price: 6},
//     {name: 'wine', price: 16},
// ],
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
// // false
//
// Write a function named newProduct with two parameters, a string that contains a name, and a number representing the product's price, and returns an object with properties name and price.
//
// newProduct('tomatoes', 3.99) // {name: 'tomatoes', price: 3.99}
// newProduct('Yu-Gi-Oh Booster Pack', 5.89) // {name: 'Yu-Gi-Oh Booster Pack', price: 5.89}
//
//
// Write a function named countWords that accepts a string and returns the number of words in that string.
//
// countWords('Hello, Codeup!') // 2
// countWords('The quick brown fox jumps over the lazy dog!') // 9
//
// Write a function named describeNumber that takes in an integer and will return an object describing different features of the input as a number. If the input is a number, the object should have three properties: value for the value passed, evenOrOdd which should be a string to identify whether the passed argument is evenly divisible by 2, and numberOfDigits which should count the number of digits in the argument passed into the function:
//
//     describeNumber(45) // {value: 45, evenOrOdd: "odd", numberOfDigits: 2};
// describeNumber(360) // {value: 360, evenOrOdd: "even", numberOfDigits: 3};
// describeNumber(0) // {value: 0, evenOrOdd: "even", numberOfDigits: 1};
// describeNumber("123") // {value: 123, evenOrOdd: "odd", numberOfDigits: 3};
//
// Write a function named screamingSnakeCase that accepts a string that has several words each separated by a space, and returns a string with each word in all caps, and with the spaces replaced by underscores (ex. SCREAMING_SNAKE_CASE).
//
// screamingSnakeCase('Lord Palmerston') // "LORD_PALMERSTON"
// screamingSnakeCase('pitt the elder') // "PITT_THE_ELDER"
// screamingSnakeCase('99 BaRRels Of rOOt BEeR oN ThE WaLL') // "99_BARRELS_OF_ROOT_BEER_ON_THE_WALL"
// screamingSnakeCase('The quick brown fox jumped over the lazy dog') // "THE_QUICK_BROWN_FOX_JUMPS_OVER_THE_LAZY_DOG"
//
//
// // Your solutions will go here :)
//
// function lowerCase(str) {
//     if (typeof str !== "string") return false;
//     return str.toLowerCase();
// }
//
// function isAllLowerCase(str) {
//     if (typeof str !== "string") return false;
//     return str.toLowerCase()=== str;
// }
//
// function isAllUpperCase(str) {
//     if (typeof str !== "string") return false;
//     return str === str.toUpperCase();
// }
// function isNotPalindrome(str) {
//     if (typeof str !== "string") return true;
//     const reversedStr = str.split("").reverse().join("");
//     return str.toLowerCase() !== reversedStr.toLowerCase();
// }
// function multiplyBy2(num) {
//     if (typeof num === 'undefined' || num === null ||
//         typeof num === 'boolean' || Array.isArray(num) || isNaN(num)) {
//         return false;
//     }
//     return num * 2;
// }
//
// function convertHourToSec(hours) {
//     if (typeof hours === 'string') {
//         hours = parseFloat(hours);
//     }
//     if (typeof hours !== 'number' || isNaN(hours) || hours < 0) {
//         return false;
//     }
//     return hours * 3600;
// }
// function getLowestNumber(num1, num2, num3) {
//     if (num1 === null || num2 === null || num3 === null ||
//         typeof num1 === "boolean" || typeof num2 === "boolean" || typeof num3 === "boolean") {
//         return false;
//     }
//     num1 = Number(num1);
//     num2 = Number(num2);
//     num3 = Number(num3);
//
//     if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
//         return false;
//     }
//     return Math.min(num1, num2, num3);
// }
// function addStringLengths(string1, string2) {
//     if (typeof string1 !== "string" || typeof string2 !== "string") {
//         return false;
//     }
//     return string1.length + string2.length;
// }
// function subtract(num1, num2) {
//     if (num1 === null || num2 === null ||
//         typeof num1 === "undefined" || typeof num2 === "undefined" ||
//         typeof num1 === "boolean" || typeof num2 === "boolean" ||
//         typeof num1 === "object" || typeof num2 === "object" ||
//         Array.isArray(num1) || Array.isArray(num2)) {
//         return false;
//     }
//     if (typeof num1 === "string") {
//         num1 = Number(num1);
//     }
//     if (typeof num2 === "string") {
//         num2 = Number(num2);
//     }
//     if (isNaN(num1) || isNaN(num2)) {
//         return false;
//     }
//     return num1 - num2;
// }
//
// function calculateChange(totalCost, cashPaid) {
//     if (arguments.length !== 2 || typeof totalCost !== 'number' || typeof cashPaid !== 'number' ||
//         totalCost <= 0 || cashPaid <= 0) {
//         return false;
//     }
//     const change = cashPaid - totalCost;
//     const dollars = Math.floor(change);
//     const cents = Math.round((change - dollars) * 100);
//     return '$' + dollars + '.' + (cents < 10 ? '0' : '') + cents;
// }
//
//
// function multiplyBy2(num) {
//     if (typeof num === 'undefined' || num === null ||
//         typeof num === 'boolean' || Array.isArray(num) || isNaN(num)) {
//         return false;
//     }
//     return num * 2;
// }
//
// function isNotPalindrome(str){
//     if (typeof (str) || str === "string") return false;
//     return str.toLowerCase().split('').reverse().join('');
// }
//
//
// function isNotPalindrome(str) {
//     if (str === undefined || str === null || typeof str !== "string") {
//         return true;
//     }
//
//     str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
//
//     return str !== str.split("").reverse().join("");
// }
//
// function isNotPalindrome(str) {
//     if (typeof str !== "string") return true;
//     if (str === "") return false;
//
//     let i = 0;
//     let j = str.length - 1;
//
//     while (i < j) {
//         if (str[i].toLowerCase() !== str[j].toLowerCase()) {
//             return true;
//         }
//         i++;
//         j--;
//     }
//
//     return false;
// }
//
// function isNotPalindrome(str) {
//     if (typeof str !== "string") return true;
//     const reversedStr = str.split("").reverse().join("");
//     return str.toLowerCase() !== reversedStr.toLowerCase();
// }
//
// function inNumericAndNotNaN(input){
//     return !isNaN(parseFloat(input)) && typeof input !== null && typeof input !== "boolean"
//     typeof input !== "string";
// }
//
// function isNumericOrNumericString(input) {
//         return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean";
// }
// function isANumber(value){
//     return isNumericOrNumericString(value);
// }
//
// function parseNumber(input) {
//     if (typeof input === 'number') {
//         return input;
//     }
//
//     if (typeof input === 'string' && !isNaN(input)) {
//         return Number(input);
//     }
//
//     return  Error('Invalid input');
// }
//
// function increment (value) {
//     if (isNumericOrNumericString(value)) {
//         return parseFloat(value) + 1
//     }
//     return false;
// }
//
// function decrement (value) {
//     if (isNumericOrNumericString(value)) {
//         return parseFloat(value) - 1
//     }
//     return false;
// }
// function getHighestNumber(num1, num2, num3) {
//     // Check that all arguments are numbers
//     if (typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") {
//         return false;
//     }
//
//     // Find the highest number using Math.max
//     return Math.max(num1, num2, num3);
// }
//
// function multiply (input1){
//     if (isNumericOrNumericString(input1)) return false;
//     return parseFloat(input1) * parseFloat(input1)
// }
// function square(input1){
//     if (!isNumericOrNumericString(input1)) return false;
//     return parseFloat(input1) * parseFloat(input1);
// }
//
// function sumOfSquares(input1, input2){
//     if (!isNumericOrNumericString(input1) || !isNumericOrNumericString(input2)) return false;
//     return (parseFloat(input1) * parseFloat(input1)) + (parseFloat(input2) * parseFloat(inpout2));
// }
//
// function isPalindrome(str){
//     if (isNumericOrNumericString(str) || str === undefined) return false;
//     return str.toLowerCase().split('').reverse().join('');
// }
//
//
// --------------------------------------
//
//     "use strict";
//
// /**
//  * Write your solutions here.
//  *
//  * **Note**: While normally it is good practice to wrap your javascript in an
//  * immediately invoked function expression (iife), you should _not_ do that
//  * here. If you do, the automated tests will not be able to see your functions.
//  */
//
// function isGreaterThan (num1, num2){
//     if (num1 > num2)
//         return true
//     else (num1 < num2 || `string`)
//     return false
// }
// console.log(isGreaterThan(9.3, 7.4))            //true
// console.log(isGreaterThan(3.14, 3.14))          // false
// console.log(isGreaterThan(7.4, 9.3))            // false
// console.log(isGreaterThan(-9.3, 7.4))           // false
// console.log(isGreaterThan(-3.14, 3.14))         // false
// console.log(isGreaterThan(-7.4, 9.3))           // false
// console.log(isGreaterThan(9.3, -7.4))           // true
// console.log(isGreaterThan(3.14, -3.14))         // true
// console.log(isGreaterThan(7.4, -9.3))           // true
// console.log(isGreaterThan(-9.3, -7.4))          // false
// console.log(isGreaterThan(-3.14, -3.14))        // false
// console.log(isGreaterThan(-7.4, -9.3))          // true
// console.log(isGreaterThan(null, null))          // false
// console.log(isGreaterThan('Seven', 'eight'))    // false
//
//
// function isLessThan(num1, num2) {
//     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         return false;
//     }
//     if (num1 < num2) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// console.log(isLessThan(9.3, 7.4))            // false
// console.log(isLessThan(3.14, 3.14))          // false
// console.log(isLessThan(7.4, 9.3))            // true
// console.log(isLessThan(-9.3, 7.4))           // true
// console.log(isLessThan(-3.14, 3.14))         // true
// console.log(isLessThan(-7.4, 9.3))         // true
// console.log(isLessThan(9.3, -7.4))           // false
// console.log(isLessThan(3.14, -3.14))         // false
// console.log(isLessThan(7.4, -9.3))         // false
// console.log(isLessThan(-9.3, -7.4))          // true
// console.log(isLessThan(3.14, -3.14))        // false
// console.log(isLessThan(-7.4, -9.3))        // false
// console.log(isLessThan(null, null))          // false
// console.log(isLessThan('Seven', 'eight'))    // false
//
//
// function isEqualNumber(num1, num2) {
//     if (num1 === null || num2 === null) {
//         return false;
//     }
//     return num1 === num2;
// }
//
// console.log(isEqualNumber(9.3, 7.4))            // false
// console.log(isEqualNumber(3.14, 3.14))          // true
// console.log(isEqualNumber(7.4, 9.3))            // false
// console.log(isEqualNumber(-9.3, 7.4))           // false
// console.log(isEqualNumber(-3.14, 3.14))         // false
// console.log(isEqualNumber(-7.4, 9.3))           // false
// console.log(isEqualNumber(9.3, -7.4))           // false
// console.log(isEqualNumber(3.14, -3.14))         // false
// console.log(isEqualNumber(7.4, -9.3))           // false
// console.log(isEqualNumber(-9.3, -7.4))          // false
// console.log(isEqualNumber(-3.14, -3.14))        // true
// console.log(isEqualNumber(-7.4, -9.3))         // false
// console.log(isEqualNumber(null, null))          // false
// console.log(isEqualNumber('Seven', 'eight'))    // false
//
// function isEqual (input1, input2){
//     return input1 === input2;
// }
// console.log(isEqual("Bill", "Bill"))    // true
// console.log(isEqual(9, 9))              // true
// console.log(isEqual(null, null))        // true
// console.log(isEqual(false, false))      // true
// console.log(isEqual("Codeup", "time"))  // false
// console.log(isEqual("James", "Jimmy"))    // false
// console.log(isEqual(null, true))        // false
// console.log(isEqual(true, false))       // false
// console.log(isEqual('4', 4))           // false
//
// function isNot (input){
//     return input ===!true
// }
// console.log(isNot(false))         // true
// console.log(isNot(true))             // false
// console.log(isNot("Bob"))            // false
// console.log(isNot(null))             // false)
//
//
// function calcAbs(num) {
//     if (typeof num !== 'number' || isNaN(num)) {
//         return 0;
//     }
//     return Math.abs(num);
// }
//
// function calcCube(num) {
//     if (typeof num !== 'number' || isNaN(num)) {
//         return 0;
//     }
//     return Math.pow(num, 3)
// }
// function isTypeMatch(a, b) {
//     return typeof a === typeof b;
//
// }
// function findLongestString(str1, str2) {
//     if (typeof str1 !== 'string') {
//         str1 = '';
//     }
//     if (typeof str2 !== 'string') {
//         str2 = '';
//     }
//     return (str1.length > str2.length) ? str1 : str2;
// }
//
// function isFactor(num1, num2) {
//     if (typeof num1 !== 'number' || typeof num2 !== 'number' || num2 === 0) {
//         return false;
//     }
//     return num2 % num1 === 0;
// }
//
//
//
// //
// //
// //
// //
// //
// //
// // parseNumber("123"); // returns 123
// // parseNumber(123); // returns 123
// // parseNumber("-8.22"); // returns -8.22
// // parseNumber("-25"); // returns -25
// // parseNumber(3.39); // returns 3.39
// // parseNumber("3.39"); // returns 3.39
// // parseNumber("foo"); // throws an error
// //
// // //OR
// //
// //
// //
// // function increment(num) {
// //     if (num === null || typeof num === 'boolean' || typeof num === 'object' || typeof num === 'string' && isNaN(num)) {
// //         return false;
// //     }
// //     return Number(num) + 1;
// // }
// //
// //
// //
// // function square(number) {
// //     return number * number;
// // }
// // square(16);
// //
//
//
//
// // // # Function Drills
// // //
// // //Functions using conditionals but not loops or arrays:
// // //- Make a function named `isOdd(number)`
// // function isOdd(num) {
// //     return num + 1;}
// // console.log(isOdd(7));
// //
// // // - Make a function named `isEven(number)`
// // function isEven(num) {
// //     return num === 0 || !!(num && !num%2)}
// // console.log(isEven(4));
// // //
// // // function isEven(n) {
// // //     n = Number(20);
// // //     return n === 0 || !!(n && !(n%2));
// // // }
// // //
// // // function isOdd() {
// // //     return isEven(Number(n) + 1);
// // // }
// // // - Make a function named `identity(input)` that returns the input exactly as
// // // provided.
// // function identity(input = "Randy"){
// //     return (input)
// // }
// // console.log(identity())
// //
// // // - Make a function named `isFive(input)`
// // function isFive(input = 5){
// //     return input ===5
// // }
// // console.log(isFive())
// //
// // // - Make a function named `addFive(input)` that adds five to some input.
// //
// // function addFive(input){
// //     return input +5
// // }
// // console.log(addFive(10))
// //
// // // - Make a function named `isMultipleOfFive(input)`
// // function isMultipleOfFive (input){
// //     return input * 5
// // }
// // console.log(isMultipleOfFive(10))
// //
// // // - Make a function named `isThree(input)`
// // function isThree(input){
// //     return input ===3
// // }
// // console.log(isThree(3))
// //
// // // - Make a function named `isMultipleOfThree(input)`
// // function isMultipleOfThree (input){
// //     return input * 3
// // }
// // console.log(isMultipleOfThree(15))
// // // - Make a function named `isMultipleOfThreeAndFive(input)`
// // function isMultipleOfThreeAndFive(input) {
// //     return input * 3 * 5
// // }
// // console.log(isMultipleOfThreeAndFive(50))
// //
// // // - Make a function named `isMultipleOf(target, n)` which checks if target is
// // // evenly divisible by `n`
// //
// // function isMultipleOf(target, n) {
// //     return (target % n === 0);
// // }
// // console.log(isMultipleOf(100, 2))
// //
// // // - Make a function named `isTrue(boolean)`
// // function isTrue(boolean) {
// //     return (boolean === true);
// // }
// // console.log(true)
// // // - Make a function named `isFalse(boolean)`
// // function isFalse(boolean) {
// //     return (boolean === false);
// // }
// // console.log(false)
// // // - Make a function named `isTruthy(input)`, remember that values other than true
// // // will behave like true
// // // - Make a function named `isFalsy(input)`, remember that values other than false
// // // behave like false
// // // - Make a function named `isVowel(letter)`
// // // - Make a function named `isConsonant(letter)`
// // // - Make a function named `isCapital(letter)`
// // // - Make a function named `isLowerCase(letter)`
// // // - Make a function named `hasLowerCase(string)` that returns if a string has any
// // // lower cased letter
// // // - Make a function named `isSpace(letter)` that returns if a character is a space
// // // character
// // // - Make a function named `isZero(number)`
// // // - Make a function named `notZero(input)` that returns true if the input is not
// // // zero
// // // - Write a function named `lowerCase(string)`
// // // - Write a function named `double(n)` that returns a number times two
// // // function to check if a value is truthy
// // function isTruthy(input) {
// //     return Boolean(input);
// // }
// //
// // // function to check if a value is falsy
// // function isFalsy(input) {
// //     return !Boolean(input);
// // }
// //
// // // function to check if a letter is a vowel
// // // function isVowel(letter) {
// // //     return /^[aeiou]$/i.test(letter);
// // // }
// // // console.log(letter ="a");
// // function isVowel(letter) {
// //     const result = /^[aeiou]$/i.test(letter);
// //     console.log(`isVowel(${letter}) = ${result}`);
// //     return result;
// // }
// // // function to check if a letter is a consonant
// // function isConsonant(letter) {
// //     return /^[a-z]$/i.test(letter) && !isVowel(letter);
// // }
// //
// // // function to check if a letter is capital
// // function isCapital(letter) {
// //     return /^[A-Z]$/.test(letter);
// // }
// //
// // // function to check if a letter is lowercase
// // function isLowerCase(letter) {
// //     return /^[a-z]$/.test(letter);
// // }
// //
// // // function to check if a string has any lowercase letter
// // function hasLowerCase(string) {
// //     return /[a-z]/.test(string);
// // }
// //
// // // function to check if a character is a space character
// // function isSpace(letter) {
// //     return /\s/.test(letter);
// // }
// //
// // // function to check if a number is zero
// // function isZero(number) {
// //     return number === 0;
// // }
// //
// // // function to check if a value is not zero
// // function notZero(input) {
// //     return input !== 0;
// // }
// //
// // // function to convert a string to lowercase
// // function lowerCase(string) {
// //     return string.toLowerCase();
// // }
// //
// // // function to double a number
// // function double(n) {
// //     return n * 2;
// // }
// //
// //
// //
// // // - Write a function named `triple(n)` that returns a number times 3
// // // - Write a function named `quadruple(n)` that returns a number times 4
// // // - Write a function named `half(n)` that returns 1/2 of the provided input
// // // - Write a function named `subtract(a, b)` that returns `a` minus `b`
// // // - Write a function named `multiply(a, b)` that returns the product of `a` times
// // //     `b`
// // // - Write a function named divide(a, b) that returns `a` divided by ~b~
// // //     - Write a function named `remainder(a, b)` that returns the remainder after
// // // dividing a by b
// // // - Make a function named `modulo(a, b)` that returns the returns the remainder
// // // after dividing a by b
// // // - Write a function named `cube(n)` that returns n * n * n
// // // - Write a function named `squareRoot(n)` that returns the square root of the
// // // input
// // // - Write a function named `cubeRoot(n)` that returns the cube root of the input
// // // - Write a function named `invertSign(number)` that returns a negative version of
// // // a postive number, a positve version of negative, and false for all else.
// // // - Write a function named `degreesToRadians(number)`
// // // - Write a function named `radiansToDegrees(number)`
// // // - Make a function named `isBlank(input)` that determines if a given input is
// // // spaces, newline characters, or tabs.
// // // - Make a function named `trim(string)` that removes empty spaces before and
// // // after the input.
// // // - Make a function named `areEqual(input1, input2)` that returns if both inputs
// // // have the same value
// // // - Make a function named `areIdentical(input1, input2)` that returns if both
// // //     inputs are same value and data type.
// // // - Make a function named `not(input)` returns the input with a flipped boolean
// // // - Make a function named `notNot(input)` that the negation of the negation of the
// // // input.
// // // - Make a function named `and(predicate1, predicate2)` that returns the logical
// // // operation of AND
// // // - Make a function named `or(predicate1, predicate2)` that returns the logical
// // // operation of OR
// // // - Write a function called `reverseString(string)` that reverses a string
// // // - Make a function named `absoluteValue(number)` that returns the absolute value
// // // of a number.
// // // - Make a function named `rollDice(sides)` that takes in an argument containing
// // // the number of sides the die should have. Generate a random number between 1 up
// // // to and including the number of sides.
// // //
// // //
// // //
// // // ## Simple Function Drills
// // //
// // // 1. Make a function called returnTwo() that returns the number 2 when called
// // //
// // // Test this function with `console.log(returnTwo())`
// // //
// // //     1. Make a function called sayHowdy() which console.logs the string "Howdy!"
// // //
// // // Test this function by directly calling `sayHowdy()`
// // //
// // // Remember this function does not need a defined return value
// // //
// // // 1. Make a function called returnName() that returns the string of your name
// // //
// // // Test this function with `console.log(returnName())`
// // //
// // //     1. Make a function called addThree() which takes in a number input and returns the number plus 3.
// // //
// // // Test this function with `console.log(addThree(5))`
// // //
// // //     1. Make a function called sayString() which returns the string input passed in.
// // //
// // // Test this function with `console.log(sayString('codeup'))`
// // //
// // //
// // //     ## Challenge Function Drills
// // //
// // // - Write a function called `identity(input)` that takes in an argument called
// // // input and returns that input.
// // //
// // // - Write a function called `getRandomNumber(min, max)` that returns a random
// // // number between min and max values sent to that function call.
// // //
// // // - Write a function called `first(input)` that returns the first character in the
// // // provided string.
// // //
// // // - Write a function called `last(input)` that returns the last character of a
// // // string
// // //
// // // - Write a function called `rest(input)` that returns everything but the first
// // // character of a string.
// // //
// // // - Write a function called `reverse(input)` that takes a string and returns it
// // // reversed.
// // //
// // // - Write a function called `isNumeric(input)` that takes an input and returns a
// // // boolean if the input is numeric.
// // //
// // // - Write a function called `count(input)` that takes in a string and returns the
// // // number of characters.
// // //
// // // - Write a function called `add(a, b)` that returns the sum of a and b
// // //
// // // - Write a function called `subtract(a, b)` that return the difference between
// // // the two inputs.
// // //
// // // - Write `multiply(a, b)` function that returns the product
// // //
// // // - Write a `divide(numerator, denominator)` function that returns a divided by b
// // //
// // // - Write a `remainder(number, divisor)` function that returns the remainder left
// // // over when dividing `number` by the `divisor`
// // //
// // // - Write the function `square(a)` that takes in a number and returns the number
// // // multiplied by itself.
// // //
// // // - Write a function called `sumOfSquares(a, b)` that uses only your `add()` function
// // // and your square function and not + or * operators
// // //
// // // - Write a function called `doMath(operator, a, b)` that takes 3 parameters. The
// // // first parameter is the name of the math function you want to apply. a and b
// // // are the two numbers to run that function on.
// // //
// // // ## Even More Function Bonuses
// // //
// // // 1. Create a function that will return how many whitespace characters are at the
// // // beginning and end of a string.
// // //
// // // 1. Create a function that takes in two string inputs.
// // //
// // // - If the second string input is present in the first, return the first input
// // // string with the second input string removed from it.
// // // - If the second string input is present multiple times in the first, the
// // // second string will only be removed where it first occurs in the first
// // // string.
// // // - If the second string input is not present in the first, return the first
// // // string as entered in the function.
// // //
// // // 1. Create a function that takes in a string and returns true if the last letter
// // // is an "a" (otherwise, return false).
// // //
// // // 1. EXTRA CHALLENGE: create a function that will return how many whitespace
// // // characters are at the beginning of a string (hint: use regex).
// // //
// // // 1. Create a function `returnTrueMessage()` that returns the string "Hey, it's true!"
// // //
// // // - Create a function `returnFalseMessage()` that returns the string "Hey, it's false!"
// // // - Create a function `returnMessage()` that takes in a function and returns the call to the function
// // // - Experiement passing in different functions.
// // //
// // // 1. Create a function, `willLoginUser()` that takes in a username string,
// // //     password string, user age, a boolean indicating if they are an admin.
// // //
// // //     The function will return true if the username is not the same as the
// // // password and the user is at least 18 years old. If the user is an admin,
// // //     they do not have to be a certain age but the password must still not match
// // // the username.
// // // // --Random Numbers Code
// // // // function arrayOfRandomNumbers(lengthOfArray){
// // // //     const array = [];
// // // //     for (let i = 0; i < lengthOfArray; i++){
// // // //         let newRandomNumber = randomNumber(1, lengthOfArray +100);
// // // //         while(array.includes(newRandomNumber)){
// // // //             newRandomNumber = randomNumber(1, 100);
// // // //         }
// // // //
// // // //         array.push(newRandomNumber);
// // // //     }
// // // //     return array
// // // // }
// // //
// // // //--Object Literal! KEY & VALUE (Temp = key (temp), num/str = value (54.4) -they are variables)
// // // const currentWeather = {
// // //     temperature: 54.4,
// // //     humidity: 28,
// // //     clouds: 0,
// // //     windDirection: "NNE"
// // // }
// // // console.log("The current Weather is".temperature);
// //
// //
// //
// // //console.log(currentWeather) for ALL
// // //To access object .notation ex: currentWeather.clouds
// // //console.log(currentWeather.clouds)
// //
// // // function displayWeatherProperty(prop){
// // //     console.log(currentWeather[prop]); //Bracket notation
// // //