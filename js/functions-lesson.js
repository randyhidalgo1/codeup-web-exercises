"use strict"
// //Traditional way
// function helloWorld(){
//     alert(`Hello World`)
// }

// //Arrow Function
// const helloWorld = (name) => {
//     alert(`hello, ${name}!`);
// }
// helloWorld(Randy)

const isEven = (num) => {
    let result = num % 2 === 0;
    return result;
}
let students = 24;
let evenStudents = isEven(students);
console.log(isEven)

//ARROW function IIFE (Imediately invoked functon epxresiion)
(() => {

})();

//Traditional IIFE
(function(){

})();





