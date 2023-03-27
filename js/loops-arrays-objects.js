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

const users = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    },
    {
        isAdmin: true,
        email: 'user4@email.com'
    },
    {
        isAdmin: false,
        email: 'user5@email.com'
    },
    {
        isAdmin: false,
        email: 'user6@email.com'
    }
];

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
//SANDWICHES
console.log(getAdminUsers(users)); // Output: [{"isAdmin":true,"email":"user1@email.com"},{"isAdmin":true,"email":"user2@email.com}]
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
