
// Find the average rating of all books in the array.
// Find the book with the highest rating.
// Create an array of all books published before 2000.
// Create an array of all books written by authors whose last name starts with the letter "S".
// Calculate the total number of pages in all books in the array.
const books = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', year: 1960, rating: 4.27, description: 'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.' },
    { id: 2, title: '1984', author: 'George Orwell', genre: 'Science Fiction', year: 1949, rating: 4.17, description: 'Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake.' },
    { id: 3, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', year: 1951, rating: 3.81, description: 'The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caulfield.' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', year: 1813, rating: 4.26, description: 'Pride and Prejudice is a novel by Jane Austen, first published in 1813. The story follows the main character Elizabeth Bennet as she deals with issues of manners, upbringing, morality, education, and marriage in the society of the landed gentry of early 19th-century England.' },
    { id: 5, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', year: 1925, rating: 3.92, description: 'The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career.' },
    { id: 6, title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', genre: 'Magical Realism', year: 1967, rating: 4.05, description: 'One Hundred Years of Solitude tells the story of the rise and fall, birth and death of the mythical town of Macondo through the history of the Buendía family.' },
    { id: 7, title: 'Beloved', author: 'Toni Morrison', genre: 'Fiction', year: 1987, rating: 3.83, description: 'Staring unflinchingly into the abyss of slavery, this spellbinding novel transforms history into a story as powerful as Exodus and as intimate as a lullaby.' },
    { id: 8, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy', year: 1954, rating: 4.49, description: 'The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the wizard; the hobbits Merry, Pippin, and Sam; Gimli the dwarf; Legolas the elf; Boromir of Gondor; and a tall, mysterious stranger called Strider.' },
    { id: 9, title: 'The Adventures of Huckleberry Finn', author: 'Mark Twain', genre: 'Adventure', year: 1884, rating: 3.89, description: 'The Adventures of Huckleberry Finn is a first person narrative.' },
]

const avgRating = books.reduce((total, book) => total + book.rating, 0) / books.length.toFixed(2);;
console.log(avgRating);

const highRating = books.reduce((highest, book) => {highest = highest.rating > book.rating ? highest : book; return highest;})
console.log(highRating);

const lowRating = books.reduce((lowest, book) => {lowest = lowest.rating < book.rating ? lowest : book; return lowest;})
console.log(lowRating);

const before2000 =books.filter(book => book.year < 2000);
console.log(before2000);

const authorsByS = books.filter(book => book.author.split(" ")[0].startsWith("J"));
console.log(authorsByS);

const totalPages = books.reduce((total, book) => total + book.pages, 0);
console.log(totalPages);

// Return an array of just the book titles.
const bookTitles = books.map(book => book.title);
console.log(bookTitles)

// Return an array of objects containing just the book titles and authors.
const titleAuthors =books.map(book => ({title: book.title, author: book.author}));
console.log(titleAuthors)

// Return an array of objects containing just the book titles and the number of pages.
const bookTitlesAndPages = books.map(book => ({title: book.title, pages: book.pages}));
console.log(bookTitlesAndPages);

// Return an array of just the publication years of the books.
const bookPubYears = books.map(book => book.year);
console.log(bookPubYears)

// Return an array of objects containing just the book titles and
// whether they are fiction or non-fiction.

const fictionOrNonfiction = books.map(book => ({title: book.title, genre: book.genre}));
console.log(fictionOrNonfiction)


// Return an array of objects containing just the book titles and the average rating of the book
// rounded to 2 decimal places.
const titleAndRating = books.map(book => ({title: book.title, rating: Math.round(book.rating)}));
console.log(titleAndRating);

// Return an array of objects containing just the book titles and the names of the first and last authors.


const bookTitlesAndAuthorNames = books.map(book => ({title: book.title, firstAuthor: book.author.split(" ")[0], lastAuthor: book.author.split(" ")[1]}));
console.log(bookTitlesAndAuthorNames);

const authorAndTitles = books.map(book => ({author: book.author, title: book.title}));
console.log(authorAndTitles);

const titlesAndGenre = books.map(book => ({title: book.title, genre: book.genre, }));
console.log(titlesAndGenre);

const titlesAndYear = books.map(book => ({title: book.title, year: book.year}));
console.log(titlesAndYear);

const findDescription = books.map(book => ({title: book.title, descr: book.description}))
console.log(findDescription)

const belovedBook = books.find(book => book.title === 'Beloved');
console.log(belovedBook.description);


const arr = [1, 2, 3];
const mappedAndReduced = arr.map(element => element * 2).reduce((accumulator, current) => accumulator + current);
console.log(mappedAndReduced); // Output: 12


//
// Loop through the array and output the make, model, and mileage of every Ford.
// Then output the make, model, and mileage of every car whose make starts with 'F'.
//     9:04
// Output the make, model, and mileage of every car with mileage less than 25thousand.
// 9:05
// Write a function that takes in a car object and returns true or false depending
// on whether its mileage is less than 50K. (true if less than 50K, false if more than 50K).

// const moreCars = [
//     { make: 'Ford', model: 'Mustang', mileage: 34567 },
//     { make: 'Ford', model: 'F-150', mileage: 12345 },
//     { make: 'Ford', model: 'Escape', mileage: 45678 },
//     { make: 'Chevrolet', model: 'Camaro', mileage: 56789 },
//     { make: 'Chevrolet', model: 'Silverado', mileage: 23456 },
//     { make: 'Chevrolet', model: 'Equinox', mileage: 78901 },
//     { make: 'Buick', model: 'Enclave', mileage: 23456 },
//     { make: 'Buick', model: 'Regal', mileage: 56789 },
//     { make: 'Jeep', model: 'Wrangler', mileage: 34567 },
//     { make: 'Jeep', model: 'Grand Cherokee', mileage: 67890 },
//     { make: 'Dodge', model: 'Charger', mileage: 12345 },
//     { make: 'Dodge', model: 'Durango', mileage: 45678 },
//     { make: 'Lincoln', model: 'MKZ', mileage: 78901 },
//     { make: 'Lincoln', model: 'Navigator', mileage: 23456 },
//     { make: 'GMC', model: 'Sierra', mileage: 56789 },
//     { make: 'GMC', model: 'Terrain', mileage: 34567 },
//     { make: 'Ford', model: 'Focus', mileage: 12345 },
//     { make: 'Ford', model: 'Explorer', mileage: 45678 },
//     { make: 'Chevrolet', model: 'Impala', mileage: 23456 },
//     { make: 'Chevrolet', model: 'Suburban', mileage: 78901 },
//     { make: 'Buick', model: 'LaCrosse', mileage: 34567 },
//     { make: 'Jeep', model: 'Renegade', mileage: 12345 },
//     { make: 'Jeep', model: 'Compass', mileage: 45678 },
//     { make: 'Dodge', model: 'Challenger', mileage: 78901 },
//     { make: 'Lincoln', model: 'Continental', mileage: 23456 },
//     { make: 'Lincoln', model: 'Aviator', mileage: 56789 },
//     { make: 'GMC', model: 'Yukon', mileage: 34567 },
//     { make: 'GMC', model: 'Acadia', mileage: 12345 },
//     { make: 'Ford', model: 'Ranger', mileage: 45678 },
//     { make: 'Ford', model: 'Bronco', mileage: 78901 },
//     { make: 'Chevrolet', model: 'Malibu', mileage: 23456 },
//     { make: 'Chevrolet', model: 'Tahoe', mileage: 56789 },
//     { make: 'Buick', model: 'Encore', mileage: 34567 },
//     { make: 'Jeep', model: 'Cherokee', mileage: 12345 },
//     { make: 'Dodge', model: 'Journey', mileage: 45678 },
//     { make: 'Lincoln', model: 'Corsair', mileage: 78901 },
//     { make: 'GMC', model: 'Canyon', mileage: 23456 },
//     { make: 'Honda', model: 'Civic', mileage: 34567 },
//     { make: 'Honda', model: 'Accord', mileage: 12345 },
//     { make: 'Honda', model: 'CR-V', mileage: 45678 },
//     { make: 'Toyota', model: 'Corolla', mileage: 56789 },
//     { make: 'Toyota', model: 'Camry', mileage: 23456 },
//     { make: 'Toyota', model: 'Rav4', mileage: 78901 },
//     { make: 'Kia', model: 'Optima', mileage: 23456 },
//     { make: 'Kia', model: 'Sportage', mileage: 56789 },
//     { make: 'Kia', model: 'Soul', mileage: 34567 },
//     { make: 'Hyundai', model: 'Elantra', mileage: 67890 },
//     { make: 'Hyundai', model: 'Sonata', mileage: 12345 },
//     { make: 'Hyundai', model: 'Tucson', mileage: 45678 },
//     { make: 'Suzuki', model: 'Swift', mileage: 78901 },
//     { make: 'Suzuki', model: 'Vitara', mileage: 23456 },
//     { make: 'Mazda', model: 'CX-5', mileage: 56789 },
//     { make: 'Mazda', model: 'Mazda3', mileage: 34567 },
//     { make: 'Daihatsu', model: 'Charade', mileage: 12345 },
//     { make: 'Daihatsu', model: 'Mira', mileage: 45678 },
//     { make: 'Toyota', model: 'Yaris', mileage: 23456 },
//     { make: 'Toyota', model: 'Highlander', mileage: 56789 },
//     { make: 'Honda', model: 'Pilot', mileage: 78901 },
//     { make: 'Honda', model: 'CR-Z', mileage: 23456 },
//     { make: 'Suzuki', model: 'Jimny', mileage: 34567 },
//     { make: 'Suzuki', model: 'Celerio', mileage: 12345 },
//     { make: 'Mazda', model: 'CX-3', mileage: 45678 },
//     { make: 'Mazda', model: 'Mazda6', mileage: 78901 },
//     { make: 'Toyota', model: 'Tacoma', mileage: 23456 },
//     { make: 'Toyota', model: 'Sienna', mileage: 56789 },
//     { make: 'Kia', model: 'Stinger', mileage: 34567 },
//     { make: 'Kia', model: 'Niro', mileage: 12345 },
//     { make: 'Hyundai', model: 'Venue', mileage: 45678 },
//     { make: 'Hyundai', model: 'Santa Fe', mileage: 78901 },
//     { make: 'Daihatsu', model: 'Terios', mileage: 23456 },
//     { make: 'Daihatsu', model: 'Materia', mileage: 56789 },
//     { make: 'Suzuki', model: 'Alto', mileage: 34567 },
//     { make: 'Suzuki', model: 'Escudo', mileage: 12345 },
//     { make: 'Fiat', model: '500', mileage: 56789 },
//     { make: 'Fiat', model: 'Panda', mileage: 98765 },
//     { make: 'Fiat', model: 'Tipo', mileage: 12345 },
//     { make: 'Mercedes-Benz', model: 'C-Class', mileage: 12345 },
//     { make: 'Mercedes-Benz', model: 'E-Class', mileage: 78901 },
//     { make: 'Mercedes-Benz', model: 'S-Class', mileage: 23456 },
//     { make: 'BMW', model: '3 Series', mileage: 56789 },
//     { make: 'BMW', model: '5 Series', mileage: 98765 },
//     { make: 'BMW', model: 'X5', mileage: 23456 },
//     { make: 'Volvo', model: 'XC40', mileage: 56789 },
//     { make: 'Volvo', model: 'XC60', mileage: 98765 },
//     { make: 'Volvo', model: 'XC90', mileage: 12345 },
//     { make: 'Audi', model: 'A3', mileage: 78901 },
//     { make: 'Audi', model: 'A4', mileage: 23456 },
//     { make: 'Audi', model: 'Q5', mileage: 56789 },
//     { make: 'Jaguar', model: 'F-PACE', mileage: 23456 },
//     { make: 'Jaguar', model: 'XE', mileage: 98765 },
//     { make: 'Jaguar', model: 'XF', mileage: 12345 },
//     { make: 'Volkswagen', model: 'Golf', mileage: 56789 },
//     { make: 'Volkswagen', model: 'Jetta', mileage: 78901 },
//     { make: 'Volkswagen', model: 'Tiguan', mileage: 23456 },
//     { make: 'Fiat', model: 'Doblo', mileage: 12345 },
//     { make: 'Fiat', model: '500L', mileage: 56789 },
//     { make: 'Fiat', model: 'Spider', mileage: 98765 },
//     { make: 'Mercedes-Benz', model: 'GLE', mileage: 23456 },
//     { make: 'Mercedes-Benz', model: 'GLC', mileage: 56789 },
//     { make: 'Mercedes-Benz', model: 'GLA', mileage: 78901 },
//     { make: 'BMW', model: 'M3', mileage: 23456 },
//     { make: 'BMW', model: 'M5', mileage: 56789 },
//     { make: 'BMW', model: 'X3', mileage: 98765 },
//     { make: 'Volvo', model: 'S60', mileage: 12345 },
//     { make: 'Volvo', model: 'S90', mileage: 23456 },
//     { make: 'Volvo', model: 'V90', mileage: 56789 },
//     { make: 'Audi', model: 'Q3', mileage: 78901 },
//     { make: 'Audi', model: 'Q7', mileage: 23456 },
//     { make: 'Audi', model: 'TT', mileage: 56789 }
// ];
// const sortedCars = moreCars.map(car => car.make).sort();
// console.log(sortedCars);
//
// const sorted = [...moreCars.reduce((acc, sort) => {
//     if (!acc.has(sort.make)) acc.set(sort.make, sort);
//     return acc;
// }, new Map()).values()];
// console.log(sorted);
//
// const fordCars = moreCars.filter(car => car.make === "Ford" || car.make === "Audi" && car.mileage < 50000);
// console.log(fordCars);
//
// const fCars = moreCars.filter(car => car.make.startsWith("M") && car.mileage < 25000);
// console.log(fCars);
//
// const allCars = moreCars.filter(car => car.mileage < 50000);
// console.log(allCars);
//
// const less50K = moreCars.map(car => car.mileage < 50000);
// // const trueCars = moreCars.filter((car, index) => less50K[index]);
// console.log(less50K);
//
// // const result = moreCars.map(car => moreCars.indexOf(car.mileage < 50000) !== -1);
// // console.log(result);
//
// const filteredCars = moreCars.filter(car => car.mileage < 50000);
// const result = moreCars.map(car => filteredCars.indexOf(car) !== -1);
// console.log(result);
