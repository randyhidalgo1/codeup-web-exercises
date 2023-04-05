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