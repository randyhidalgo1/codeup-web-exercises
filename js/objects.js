(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    const person = {
        firstName: "Rick ",
        lastName: "Sanchez",
        sayHello: "Hello from ",
    }
    console.log(person.firstName)
    console.log(person.lastName)


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    console.log(person.sayHello + person.firstName + person.lastName)


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
//
    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function hebDiscount(discount, totalAmount) {
        if (discount === 0) {
            return totalAmount;
        } else if (discount === 1) {
            return totalAmount * 0.88;
        }
    }

    console.log(shoppers[0].name + " this your current bill $ " + shoppers[0].amount + " this your bill after discount " + `$${hebDiscount(0, 180)}.`)
    console.log(shoppers[1].name + " this your current bill $ " + shoppers[1].amount + " this your amount after discount " + `$${hebDiscount(1, 250)}.`)
    console.log(shoppers[2].name + " this your current bill $ " + shoppers[2].amount + " this your amount after discount " + `$${hebDiscount(1, 320)}.`)


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    const books = [
        {
            title: "Salmon of Doubt",
            authorFirstName: "Douglas",
            authorLastName: "Adams"
        },
        {
            title: "Book of  lies",
            authorFirstName: "Salmon",
            authorLastName: "Rushdie"
        },
        {
            title: "Puzzle Palace",
            authorFirstName: "William",
            authorLastName: "Jones"
        },
        {
            title: "Perfect Strike",
            authorFirstName: "James",
            authorLastName: "Conner"
        },
        {
            title: "Beyond the skies",
            authorFirstName: "Michael",
            authorLastName: "Jackson"
        }
    ];

    console.log(books[0].title) // "The Salmon of Doubt"
    console.log(books[0].authorFirstName) // "Douglas"
    console.log(books[0].authorLastName) // "Adams"

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    console.log("Title: " + books[0].title + " Author: " + books[0].authorFirstName + " " + books[0].authorLastName)
    console.log("Title: " + books[1].title + " Author: " + books[1].authorFirstName + " " + books[1].authorLastName)
    console.log("Title: " + books[2].title + " Author: " + books[2].authorFirstName + " " + books[2].authorLastName)
    console.log("Title: " + books[3].title + " Author: " + books[3].authorFirstName + " " + books[3].authorLastName)
    console.log("Title: " + books[4].title + " Author: " + books[4].authorFirstName + " " + books[4].authorLastName)


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(title, authorName) {
        const [authorFirstName, authorLastName] = authorName.split(' ', 2)
        const book = {
            title,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName,
            },
        };
        return book;
    }
            console.log(createBook("Sky is the limit",'George Donner'));

    function showBookInfo(bookObject) {
            return (bookObject.title + " by " + bookObject.authorFirstName + " " + bookObject.authorLastName);
        }

        for (let i = 0; i <books.length; i++) {
            console.log(showBookInfo(books[i]));
        }
})();


//NOTES EXAMPLE
// const hourlyWeather = [
//     {
//         time: "08:00",
//         temperature: 78.91,
//         feels_like: 78.91
//     },
//     {
//         time: "09:00",
//         temperature: 79.57,
//         feels_like: 79.57
//     },
//     {
//         time: "10:00",
//         temperature: 81.46,
//         feels_like: 86.04
//     },
//     {
//         time: "11:00",
//         temperature: 84.49,
//         feels_like: 89.24
//     }
// ];
// // For EACH
// hourlyWeather.forEach(hourlyForecast => console.log(hourlyForecast.temperature));
// // by time
// hourlyWeather.forEach(hourlyForecast => console.log(`At ${hourlyForecast.time}`));
//
// //Object DE-structing object
// hourlyWeather.forEach(({time,temperature,feels_like}) =>
//     console.log(`At ${time} the temp will be  ${temperature}`))
// // For Loop
// for (let i = 0; i < hourlyWeather.length; i++){
//     console.log(hourlyWeather[1].temperature);
// }
// // Spread Operator
// hourlyWeather.forEach(function({time, ...rest}) {
//     console.log(rest);
// });
// // FOR ...OF LOOP rto loop through Array
// for (const forecast of hourlyWeather){
//     console.log(forecast.temperature);
// }
//
// const myString ="randyhidalgo";
// for (const letter of myString) console.log(letter);
//

//NOTE METHOD

// const fighter1 = {
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8,
//     attack: function (enemy) {
//         console.log(`${enemy.name} has ${enemy.hitPoints}`);
//         console.log(this.name + "attacks!");
//         const damage = Math.ceil(Math.random() * this.maxDamage);
//         console.log(`${this.name} does ${damage} points of damage!`);
//         console.log(`${enemy.name} has ${enemy.hitPoints} hit points left!`);
//     }
// }
//
//
// const fighter2 = {
//     name: "Bigfoot",
//     hitPoints: 17,
//     maxDamage: 10,
//     attack: function () {
//         console.log(this.name + "attacks!");
//     }
// }
//
// const monster = {
//     name: "Goblin",
//     hitPoints: 8,
//     maxDamage: 6,
// }
//
// const gameLogic = {
//     attack: function (attacker, defender) {
//         console.log(`${defender.name}has ${defender.hitPoints} hit points.`)
//         const hpBeforeAttack = defender.hitPoints;
//         const damage = Math.ceil(Math.random() * attacker.maxDamage);
//         defender.hitPoints -= damage;
//     }
// }
//
// const view = {
//     displayAttacksResults: function(attackerName, defenderName, hpBeforeAttack, hpAfterAttack, damage){
//     console.log(`${defenderName} and ${hpBeforeAttack} hit points`);
//     console.log(`${attackerName} attacks`);
//     console.log(`${attackerName} does ${damage} hit points`);
//     }
// }
