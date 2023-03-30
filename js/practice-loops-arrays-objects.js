
// Find the total and average of the array of a hundred numbers.
const aHundredNums = [9225, 6397, 97, 5062, 2149, 4656, 6551, 2145, 1073, 7963, 6279, 2873, 1820, 1468, 9611, 6431, 797, 3433, 5518, 4932, 7880, 6996, 5761, 6828, 6909, 9431, 4313, 2265, 7709, 5131, 2054, 8212, 9285, 7945, 612, 6055, 7189, 8539, 8201, 2209, 98, 9329, 4281, 441, 7230, 3582, 2502, 8432, 9749, 1267, 4111, 4289, 6793, 8238, 6892, 7665, 9252, 2065, 9817, 8868, 2133, 4519, 1916, 3035, 7547, 9217, 9438, 4473, 7162, 6652, 2540, 5290, 1502, 7302, 3917, 6100, 6211, 286, 8413, 8380, 5514, 5858, 7280, 3490, 3907, 1, 1428, 8825, 8339, 8809, 7713, 7770, 3873, 3474, 6775, 9126, 3081, 7613, 4017, 445];
function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
} console.log(average(aHundredNums));



const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// Use .map to create an array of strings where each element is a user's email address
const usersEmail = users.map(users =>`${users.email}`)
console.log(usersEmail)
// emails.forEach(email => console.log(email))
// const emails = users.map(users => users.email)

// Use .filter to create an array of user objects
// where each user object has at least 3 languages in the languages array.

function language(users) {
    const languages = users.filter(users => users.languages.length >= 3);
    return languages;
}
console.log(language(users))

// Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.
function totalYears(yearsOfExperience) {
    return yearsOfExperience.reduce((a, b) => (a + b)) / yearsOfExperience.length;
}
console.log(totalYears(users.map(users => users.yearsOfExperience)))

// Use .reduce to get the longest email from the list of users.
function longestEmail(email) {
    return email.reduce((a, b) => a.length > b.length ? a : b);
}
console.log(longestEmail(users.map(users => users.email)))

// Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.

function userNames(name) {
    return name.reduce((a, b) => a + ", " + b);
}
console.log(userNames(users.map(users => users.name)))


// const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// prices.forEach(price => console.log(price));
//
// const priceAfterTax = prices.map(price => {
//     const tax = (price * 0.0825).toFixed(2)
//     const total = (price + parseFloat(tax)).toFixed(2);
//     return total;
//     // console.log(total)
// });

//Starting with an array of numbers, use .map to create an array with all the numbers squared.
// let randomNumbers = [70, 30, 73, 22, 40, 48, 76, 20, 13, 92, 20, 56, 97, 76, 26, 77, 57, 47, 83, 70 ];
// let squaredNumbers = randomNumbers.map(number => number**2)
// console.log(squaredNumbers)
//
// const cars = [
//     {
//         make: "Honda",
//         model: "Civic",
//         mileage: 10428
//     },
//     {
//         make: "Toyota",
//         model: "Corolla",
//         mileage: 9425
//     },
//     {
//         make: "Ford",
//         model: "Mustang",
//         mileage: 2567,
//         price: 8000
//     },
//     {
//         make: "Audi",
//         model: "A3",
//         mileage: 14500,
//         price: 9000
//     },
//     {
//         make: "Mazda",
//         model: "3",
//         mileage: 11248,
//         price: 10000
//     }
// ];
//     cars.filter(car => car.price < 10000)
//         .map(car => {
//             const tax = car.price * 0.0825;
//             const total = (car.price + tax).toFixed(2);
//             return {... car, priceWithTax: parseFloat(total)
//         }
//         })
//             .sort((a, b) => b.price - a.price)
//             .forEach(({year, make, model, price, priceWithTax}) => {
//                 const p = document.createElement('p');
//                 p.innerTextL = `I found a ${year} ${make} ${model} for $${price}, or ${priceWithTax} after tax.`;
//                 document.querySelector('body').appendChild(p);
//                 });
//         console.log(cars)


//
// const mileage = cars.map(car => car.mileage)
// const carNames = cars.map(car =>`${cars.make} ${cars.model}`)
// // console.log(carNames(make, model))

// const overTenThousandMiles = cars.filter(car => {
//     return car.mileage > 10000;
// });
// console.log(overTenThousandMiles)
// const overTenThousandMiles = cars.filter(car => car.mileage > 10000).sort((a, b) => a.mileage - b.mileage);

//
// //Take your books array from the objects exercise.
// // Use .map() to create a new array that has all the author names in a single property.
// const books = [
//     {
//         title: "Salmon of Doubt",
//         authorFirstName: "Douglas",
//         authorLastName: "Adams"
//     },
//     {
//         title: "Book of  lies",
//         authorFirstName: "Salmon",
//         authorLastName: "Rushdie"
//     },
//     {
//         title: "Puzzle Palace",
//         authorFirstName: "William",
//         authorLastName: "Jones"
//     },
//     {
//         title: "Perfect Strike",
//         authorFirstName: "James",
//         authorLastName: "Conner"
//     },
//     {
//         title: "Beyond the skies",
//         authorFirstName: "Michael",
//         authorLastName: "Jackson"
//     }
// ];
//
// const authorsName = books.map(books =>`${books.authorFirstName} ${books.authorLastName}`)
// // console.log(authorsName)
// const authors = books.map(books => {
//     return {
//         title: books.title,
//         author: `${books.authorFirstName} ${books.authorLastName}`
//     }
// });


// Create an array with all the smash characters whose names contain only 5 letters.
// const smashers = ["Mario", "Donkey Kong", "Link", "Samus","Dark Samus", "Yoshi", "Kirby", "Fox", "Pikachu", "Luigi", "Ness", "Captain Falcon", "Jigglypuff",     "Peach", "Daisy", "Bowser", "Ice Climbers", "Sheik", "Zelda", "Dr. Mario", "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf", "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight", "Pit", "Dark Pit", "Zero Suit Samus", "Wario", "Snake", "Ike", "Pokemon Trainer", "Squirtle", "Ivysaur", "Charizard", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario", "R.O.B.", "Toon Link", "Wolf", "Villager", "Mega Man", "Wii Fit Trainer", "Rosalina & Luma", "Little Mac", "Greninja", "Mii Brawler", "Mii Swordfighter", "Mii Gunner", "Palutena", "Pac-Man", "Robin", "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta", "Inkling", "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", "Piranha Plant", "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth", "Min Min", "Steve", "Sephiroth", "Pyra", "Mythra", "Kazuya", "Sora"];
//
// const fiveLetters = smashers.filter(smashers => {
//     return smashers.length< 5;
// });
// console.log(fiveLetters)

// Create another array with all the smash characters whose names contain over 10 letters.
// const tenLetters = smashers.filter(smashers => {
//     return smashers.length> 10;
// });
// console.log(tenLetters)

// Order these arrays alphabetically.
// const alphabet = smashers.filter(smashers => smashers).sort((a, b) => a.smashers - b.smashers);
// console.log(alphabet)



const mixedArray = ["apple", 5, "banana", 3, "cherry", true, 1.5];

function filterNumbers(arr) {
    const numbersOnly = arr.filter(item => typeof item === "number");
    const sortedNumbers = numbersOnly.sort((a, b) => a - b);
    return sortedNumbers;
}

const sortedNumbers = filterNumbers(mixedArray);
console.log(sortedNumbers); // Output: [3, 5, 1.5]

// create an array of dog objects
const dogs = [
    { name: 'Buddy', breed: 'Golden Retriever', age: 5 },
    { name: 'Charlie', breed: 'Poodle', age: 3 },
    { name: 'Max', breed: 'German Shepherd', age: 7 },
    { name: 'Lola', breed: 'Labrador', age: 4 },
    { name: 'Rocky', breed: 'Bulldog', age: 2 }
];

// define a function to increase the age of each dog by 1
function getOlder(dogArray) {
    for (let i = 0; i < dogArray.length; i++) {
        dogArray[i].age += 1;
    }
}

// call the getOlder function to increase the age of each dog in the dogs array by 1
getOlder(dogs);

// print the updated dogs array to the console
console.log(dogs);

//car wash function

const cars = [
    { make: "Toyota", color: "red", year: 2015, isDirty: true },
    { make: "Ford", color: "blue", year: 2018, isDirty: true },
    { make: "Honda", color: "white", year: 2020, isDirty: false },
    { make: "Chevrolet", color: "black", year: 2012, isDirty: true },
    { make: "Tesla", color: "silver", year: 2022, isDirty: false },
    { make: "BMW", color: "gray", year: 2017, isDirty: true },
    { make: "Mercedes-Benz", color: "green", year: 2019, isDirty: true },
    { make: "Audi", color: "purple", year: 2014, isDirty: false },
    { make: "Nissan", color: "orange", year: 2016, isDirty: true },
    { make: "Jeep", color: "yellow", year: 2021, isDirty: true },
];

function washCars(carArray) {
    for (let i = 0; i < carArray.length; i++) {
        carArray[i].isDirty = false;
    }
}
washCars(cars);
console.log(cars);
//
// const users = [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     },
//     {
//         isAdmin: false,
//         email: 'user3@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user4@email.com'
//     },
//     {
//         isAdmin: false,
//         email: 'user5@email.com'
//     },
//     {
//         isAdmin: false,
//         email: 'user6@email.com'
//     }
// ];

// Count all admins
const countAdmins = (users) => {
    let count = 0;
    for (let user of users) {
        if (user.isAdmin) {
            count++;
        }
    }
    return count;
};

console.log(countAdmins(users)); // Output: 2

// Get admin-only emails
const getAdminEmails = (users) => {
    let emails = [];
    for (let user of users) {
        if (user.isAdmin) {
            emails.push(user.email);
        }
    }
    return emails;
};

console.log(getAdminEmails(users)); // Output: ["user1@email.com", "user2@email.com"]

// Get user objects that are admins
const getAdminUsers = (users) => {
    let adminUsers = [];
    for (let user of users) {
        if (user.isAdmin) {
            adminUsers.push(user);
        }
    }
    return adminUsers;
};
console.log(getAdminUsers(users)); // Output: [{"isAdmin":true,"email":"user1@email.com"},{"isAdmin":true,"email":"user2@email.com}]

//SANDWICHES
let breads  = [
    "white",
    "wheat",
    "rhy",
    "white"
];

let fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];

let sandwiches = makeSandwichObjects(breads, fillings);
console.log(sandwiches);

function makeSandwichObjects(breads, fillings) {
    let sandwiches = [];
    for (let i = 0; i < breads.length; i++) {
        sandwiches.push({
            bread: breads[i],
            filling: fillings[i]
        });
    }
    return sandwiches;
}


//1st Letter of string
function firstLettersOfStringProps(obj) {
    const letters = [];
    for (let prop in obj) {
        if (typeof obj[prop] === "string") {
            letters.push(obj[prop][0]);
        }
    }
    return letters;
}

const obj = {
    propA: true,
    propB: "hello",
    propC: 23,
    propD: "world",
    propE: "apple",
    propF: false,
    propG: "banana",
    propH: "cherry",
    propI: 56,
    propJ: "dog",
};

console.log(firstLettersOfStringProps(obj)); // Output: ['h', 'w', 'a', 'b', 'c', 'd']

//name and age
const user = [
    {
        name: "Fred Smith",
        favColor: "Blue",
        age: 25,
        isAdmin: false,
        phoneNumber: "555-1234"
    },
    {
        name: "Sally Smith",
        favColor: "Green",
        age: 37,
        isAdmin: true,
        phoneNumber: "555-5678"
    },
    {
        name: "Karen Smith",
        favColor: "Red",
        age: 19,
        isAdmin: false,
        phoneNumber: "555-9101"
    }
]


function returnBasicUserData(users) {
    return users.map(user => ({
        name: user.name,
        age: user.age
    }));
}
console.log(returnBasicUserData(user));


//return char count
const input=[
    {
        someProp1: true,
        someProp2: null,
        someProp3: "hello",
        someProp4: 88,
        someProp5: "world",
        someProp6: "is",
        someProp7: "great"
    }
];

function returnCharCount(input) {
    let totalChars = 0;

    function countChars(obj) {
        if (typeof obj === "string") {
            totalChars += obj.length;
        } else if (Array.isArray(obj)) {
            obj.forEach((item) => countChars(item));
        } else if (typeof obj === "object" && obj !== null) {
            for (let key in obj) {
                countChars(obj[key]);
            }
        }
    }

    countChars(input);
    return totalChars;
}
console.log(returnCharCount(input));

const customers = [
    {
        CustomerName: 'Alice',
        items: [
            { name: 'item 1', price: 20 },
            { name: 'item 2', price: 30 },
            { name: 'item 3', price: 40 },
        ],
        clubMember: true,
        dues: 100,
        overdueAccount: true,
        trainerName: 'Trainer 1',
        trainerPrice: 50,
    },
    {
        CustomerName: 'Bob',
        items: [
            { name: 'item 4', price: 10 },
            { name: 'item 5', price: 15 },
            { name: 'item 6', price: 25 },
        ],
        clubMember: false,
        dues: 50,
        overdueAccount: false,
        trainerName: '',
        trainerPrice: 0,
    },
    {
        CustomerName: 'Charlie',
        items: [
            { name: 'item 7', price: 50 },
            { name: 'item 8', price: 60 },
        ],
        clubMember: false,
        dues: 0,
        overdueAccount: false,
        trainerName: '',
        trainerPrice: 0,
    },
    {
        CustomerName: 'Dave',
        items: [
            { name: 'item 9', price: 30 },
            { name: 'item 10', price: 20 },
        ],
        clubMember: true,
        dues: 75,
        overdueAccount: false,
        trainerName: 'Trainer 2',
        trainerPrice: 75,
    },
    {
        CustomerName: 'Emily',
        items: [
            { name: 'item 11', price: 10 },
            { name: 'item 12', price: 20 },
            { name: 'item 13', price: 30 },
            { name: 'item 14', price: 40 },
        ],
        clubMember: false,
        dues: 25,
        overdueAccount: false,
        trainerName: '',
        trainerPrice: 0,
    },
];

function overDue(customers) {
    const overDueCustomers = customers.filter(customer => customer.overdueAccount > 0 && customer.clubMember);
    return overDueCustomers;
}
console.log(overDue(customers));




const transactions = [
    {
        customerName: 'Alice',
        items: [
            { name: 'item 1', price: 20 },
            { name: 'item 2', price: 30 },
            { name: 'item 3', price: 40 },
        ],
        clubMember: true,
    },
    {
        customerName: 'Bob',
        items: [
            { name: 'item 4', price: 10 },
            { name: 'item 5', price: 15 },
            { name: 'item 6', price: 25 },
        ],
        clubMember: false,
    },
    {
        customerName: 'Charlie',
        items: [
            { name: 'item 7', price: 50 },
            { name: 'item 8', price: 60 },
        ],
        clubMember: false,
    },
    {
        customerName: 'Dave',
        items: [
            { name: 'item 9', price: 30 },
            { name: 'item 10', price: 20 },
        ],
        clubMember: true,
    },
    {
        customerName: 'Emily',
        items: [
            { name: 'item 11', price: 10 },
            { name: 'item 12', price: 20 },
            { name: 'item 13', price: 30 },
            { name: 'item 14', price: 40 },
        ],
        clubMember: false,
    },
    {
        customerName: 'Frank',
        items: [
            { name: 'item 15', price: 70 },
            { name: 'item 16', price: 80 },
        ],
        clubMember: true,
    },
    {
        customerName: 'Grace',
        items: [
            { name: 'item 17', price: 15 },
            { name: 'item 18', price: 25 },
            { name: 'item 19', price: 35 },
            { name: 'item 20', price: 45 },
        ],
        clubMember: false,
    },
    {
        customerName: 'Henry',
        items: [
            { name: 'item 21', price: 55 },
            { name: 'item 22', price: 65 },
            { name: 'item 23', price: 75 },
        ],
        clubMember: false,
    },
    {
        customerName: 'Isabella',
        items: [
            { name: 'item 24', price: 90 },
            { name: 'item 25', price: 100 },
        ],
        clubMember: true,
    },
    {
        customerName: 'Jack',
        items: [
            { name: 'item 26', price: 5 },
            { name: 'item 27', price: 10 },
            { name: 'item 28', price: 15 },
            { name: 'item 29', price: 20 },
            { name: 'item 30', price: 25 },
        ],
        clubMember: false,
    },
];

function discountCheck(transaction) {
    const { customerName, items, clubMember } = transaction;
    const total = items.reduce((acc, item) => acc + item.price, 0);

    return total >= 150 || clubMember;
}
    console.log(transactions.filter(discountCheck));