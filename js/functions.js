
//
// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */


// function sayHello(name = "Codeup") {
//     return `Hello, ${name}!`;
// }
// console.log(sayHello)();

//
// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work
//  */


// function sayHello(name) {
//     return `Hello, ${name}`;
// }
// let helloMessage = sayHello("Randy")
// console.log(helloMessage);


// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */


// function myName(name = `Randy`) {
//     return `Hello, ${name}`;
// }
// let sayHello = (`name`)
// console.log(myName());


// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// // var random = Math.floor((Math.random() * 3) + 1);
//
// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
//  *
//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */


// function isTwo(num) {
//     return num === 2;
// }
// let random = Math.floor(Math.random() * 3) + 1;
// console.log(isTwo(random));


// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
//  *
//  * Examples:
//  * > calculateTip(0.20, 20) // returns 4
//  * > calculateTip(0.25, 25.50) // returns 6.375
//  * > calculateTip(0.15, 33.42) // returns 5.013
//  */

// function calculateTip(tip, bill) {
//     return bill * tip;
// }
// console.log(calculateTip(0.20, 20.00))
// console.log(calculateTip(0.25, 25.50))
// console.log(calculateTip(0.15, 33.42))


// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */

// function calculateTip(bill, tipPercentage) {
//     let tipAmount = bill * tipPercentage;
//     return tipAmount;
// }
//
// let billTotal = parseFloat(prompt("Enter the total bill amount:"));
//
// if (isNaN(billTotal) || billTotal === "") {
//     alert("Please enter a valid number.");
// } else {
//     let tipPercentage = parseFloat(prompt("Enter the tip percentage:")) / 100;
//
//     if (isNaN(tipPercentage) || tipPercentage === "") {
//         alert("Please enter a valid number.");
//     } else {
//         let tipAmount = calculateTip(billTotal, tipPercentage);
//         alert(`You should tip $${tipAmount.toFixed(2)}.`);
//     }
// }
//  * TODO:
//  * Create a function named applyDiscount. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
//  *
//  * Example:
//  * > var originalPrice = 100;
//  * > var discountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, discountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */

// function applyDiscount(originalPrice, discountPercent) {
//     return originalPrice - (originalPrice * discountPercent);
// }
// let originalPrice = 40.99;
// let discountPercent = 0.12;
// let discountedPrice = applyDiscount(originalPrice, discountPercent);
// console.log(discountedPrice);

