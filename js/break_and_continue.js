
let userInput;{}
while (true) {
    let userInput = prompt("Enter odd number between 1-50:");
    console.log(userInput);

    if (userInput >= 1 && userInput <= 50 && userInput % 2 !== 0) {
        break;
    } console.log("Skip number: " + userInput);
}
for (let i = 1; i <= 50; i += 2) {
    if (i === userInput) {
        console.log("Skip number: " + userInput);
        continue;
    }
    console.log("Odd number: " + i);
}
