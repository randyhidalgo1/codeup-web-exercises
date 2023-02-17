//let  fruits = [`bananas`, `apples`, `oranges`, `mangos`, `tomatoes`];
// let var1 = fruits[2]
//     console.log(var1)
// let numberOfFruits = fruits.length
//    console.log('The number of fruits => ', numberOfFruits);
//
// let fruitsString = fruits.toString();
// console.log('Using toString() on fruits => ', fruitsString);
//
// let fruitsAndNumbers = ["bananas", 2, "apples", 45];
// console.log(fruitsAndNumbers)
//
// //const returnString = (input) => {
// return input;
// }

//let  fruits = [`bananas`, `apples`, `oranges`, `mangos`, `tomatoes`];
// for(let i = 0; i <= fruits.length; i++ ){
//     let fruit = fruits[i];
//     console.log(fruit)
//
// }

// fruits.forEach(function(element,index,array){
//     console.log("The Element follows:", element);
//     console.log("The Index follows:", index);
//     console.log("The Array follows:", array);
// });

//OR WITH ARROW FUNCTION
// const forEach = (callback) => {
//     ...
//     callback(element,index, array);
// }
// fruits.forEach((fruit,index,array)=> {
//     console.log("The Element follows:", element);
//     console.log("The Index follows:", index);
//     console.log("The Array follows:", array);
// });
//OR
// let favFruits = [];
// fruits.forEach((fruit,index,array)=> {
//     if (fruit === "apples" || fruit === "tomatoes"){
//         favFruits.push(fruit);
//     }
// });
// console.log(favFruits)

// let studentsSeating = [
//     ['1', '2', '3', '4'],
//     ['5', '6','7','8'],
//     ['9', '10', '11'],
//     ['12','13', '14'],
// ];
// studentsSeating.forEach((row) => {
//     row.forEach((student) => {
//         console.log(student);
//     })
// });


    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
let names=['jason', 'javier', 'joe', 'jane']
console.log(names)

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length)

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     *
     */
names.forEach(function(element,index,array){
    console.log("The Element follows:", element);
});
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for(let i = 0; i <= names.length; i++ ) {
    let name = names[i];
    console.log(name)
}

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
let studentNames = [];
names.forEach((names,index,array)=> {
    if (names === "jason" || names === "javier"){
        studentNames.push(names);
    }
});
console.log(studentNames)
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
//let   arr = [`1`, `2`, `3`, `4`, `5`];
// let first = numbers[0]
//     console.log(first)
// let second = numbers[1]
// console.log(second)
// let last = numbers[4]
// console.log(last)


const arr = [1, 2, 3, 4, 5];
function first(arr) {
    return arr[0];
}
function second(arr) {
    return arr[1];
}

function last(arr) {
    return arr[4];
}

console.log(first(arr));
console.log(second(arr));
console.log(last(arr));
