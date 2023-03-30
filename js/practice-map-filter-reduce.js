// TODO: Given the following array, complete the todos...

const dogs = [
    {
        dogName: 'Bubbles',
        age: 10,
        isTrained: false
    },
    {
        dogName: 'Lexie',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Doggy',
        age: 5,
        isTrained: false
    },
    {
        dogName: 'Flopper',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Lexie',
        age: 1,
        isTrained: true
    },
    {
        dogName: 'Skip',
        age: 7,
        isTrained: true
    },
    {
        dogName: 'Blue',
        age: 4,
        isTrained: false
    }
];

// MAP

// TODO 1: using map, create a new array of dog names from the dogs array
let dogNames = dogs.map(dogs =>`${dogs.dogName}`)
console.log(dogNames);

// TODO 2: using map, create a new array of dog ages from the dogs array
let dogAges = dogs.map(dogs =>`${dogs.age}`)
console.log(dogAges);

// TODO 3: using map, create a new array of dog objects from the dogs array that only have dog names and age properties and values
const dogObjects = dogs.map(dogs => {
    return {dogName: dogs.dogName, age: dogs.age}
});
console.log(dogObjects);


// FILTER

// TODO 4: using filter, create a new array containing only dogs younger than 10 years old
let youngDogs = dogs.filter(dogs => dogs.age < 10);
console.log(youngDogs)
console.log()

// TODO 5: using filter, create a new array containing only dogs named 'Lexie'
let lexieDogs = dogs.filter(dogs => dogs.dogName === 'Lexie');
console.log(lexieDogs);

// TODO 6: using filter, create a new array containing only dogs that are trained and younger than 10
let trainDogs = dogs.filter(dogs => dogs.isTrained === true && dogs.age < 10);
console.log(trainDogs);


// REDUCE

// TODO 7: using reduce, return a string containing all dog names together with no spaces ("BubblesLexieDoggy...")
function doggyNames(dogs) {
    return dogs.reduce((a, b) => a + "" + b);
}
console.log(doggyNames(dogs.map(dogs => dogs.dogName)));

// TODO 8: using reduce, return the total of adding all dog ages together (18)
function doggyAges(dogs) {
    return dogs.reduce((a, b) => a + b);
}
console.log(doggyAges(dogs.map(dogs => dogs.age)));

// TODO 9: using reduce, return an array of dog objects with all isTrained properties set to true
function trainedDogs(dogs) {
    return dogs.reduce((a, b) => a + b);
}
console.log(trainedDogs(dogs.map(dogs => dogs.isTrained === true)));


// EXTRA CHALLENGES

// TODO 10: what is the average age of each dog?
function averageAge(dogs) {
    return dogs.reduce((a, b) => a + b) / dogs.length;
}
console.log(averageAge(dogs.map(dogs => dogs.age)));

// TODO 11: what is the average age of dogs that are trained?
function averageTrained(dogs) {
    return dogs.reduce((a, b) => a + b) / dogs.length;
}
console.log(averageAge(dogs.map(dogs => dogs.isTrained === true && dogs.age)));

// TODO 12: what is the average length of names of untrained dogs?
function averageName(dogs) {
    return dogs.reduce((a, b) => a + b) / dogs.length;
}
console.log(averageName(dogs.map(dogs => dogs.isTrained === false && dogs.dogName.length)));

// TODO 13: what are the combined ages of all dogs in dog years? (7x more than a human year)
console.log('Exercise 13:');

// TODO 14: create a string of the first letters of each dog name for dogs three years old (should be "LF")
console.log('Exercise 14:');


//Exercise turned in
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
let usersEmail = users.map(users =>`${users.email}`)
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

function instructors(name) {
    return name.reduce((a, b) => a + ", " + b);
}
console.log(instructors(users.map(users => users.name)))



const usedCars = [
    {
        year: 2006,
        make: "Toyota",
        model: "Prius",
        price: 8044
    },
    {
        year: 2017,
        make: "Honda",
        model: "Civic",
        price: 18123
    },
    {
        year: 2004,
        make: "Ford",
        model: "Mustang",
        price: 9052
    },
    {
        year: 2013,
        make: "Cadillac",
        model: "ATS",
        price: 10991
    },
    {
        year: 2009,
        make: "Subaru",
        model: "Impreza",
        price: 7335
    },
    {
        year: 2008,
        make: "Dodge",
        model: "Charger",
        price: 8847
    },
    {
        year: 2014,
        make: "Chrysler",
        model: "300",
        price: 13517
    },
    {
        year: 2011,
        make: "Buick",
        model: "Regal",
        price: 8253
    },
    {
        year: 2012,
        make: "Chevrolet",
        model: "Impala",
        price: 6736
    },
    {
        year: 2015,
        make: "BMW",
        model: "3 series",
        price: 13767
    },
    {
        year: 2020,
        make: "Hyundai",
        model: "Elantra",
        price: 17892
    },
    {
        year: 2008,
        make: "Mercedes-Benz",
        model: "C-Class",
        price: 8444
    },
    {
        year: 2016,
        make: "Audi",
        model: "A3",
        price: 15900
    }
];

const usedCarPrices = usedCars.map(car => car.price);
console.log(usedCarPrices);

let toValueOfAllCars =usedCarPrices.reduce((total, price, index) => {
    console.log(`The Index is ${index} and the total is ${total} and the price is ${price}`);
    return total + price;
});
console.log(toValueOfAllCars);

const averageCarValue = usedCarPrices.reduce((total, price, index, array) => {
    total += price;
    if (index === array.length -1) {
        return parseFloat(total/array.length).toFixed(2);
    } else {
        return total;
    }
});         console.log(averageCarValue);

// Find the total and average of the array of a hundred numbers.
const aHundredNums = [9225, 6397, 97, 5062, 2149, 4656, 6551, 2145, 1073, 7963, 6279, 2873, 1820, 1468, 9611, 6431, 797, 3433, 5518, 4932, 7880, 6996, 5761, 6828, 6909, 9431, 4313, 2265, 7709, 5131, 2054, 8212, 9285, 7945, 612, 6055, 7189, 8539, 8201, 2209, 98, 9329, 4281, 441, 7230, 3582, 2502, 8432, 9749, 1267, 4111, 4289, 6793, 8238, 6892, 7665, 9252, 2065, 9817, 8868, 2133, 4519, 1916, 3035, 7547, 9217, 9438, 4473, 7162, 6652, 2540, 5290, 1502, 7302, 3917, 6100, 6211, 286, 8413, 8380, 5514, 5858, 7280, 3490, 3907, 1, 1428, 8825, 8339, 8809, 7713, 7770, 3873, 3474, 6775, 9126, 3081, 7613, 4017, 445];
function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
} console.log(average(aHundredNums));

//OR
const total = aHundredNums.reduce((acc, curr, index,) => {
    return acc + curr;
}); console.log(total);

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];



// Use .reduce() with a second argument to find the total mileage of all the cars in the cars array.

const totalMileageOfAllCars = cars.reduce((acc, car,) => {
    return acc + car.mileage
    },
    0
); console.log(totalMileageOfAllCars);

const carMileage = cars.reduce((acc, car) => {
    acc.push(car.mileage);
    return acc;
},[]);