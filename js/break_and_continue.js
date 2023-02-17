let num;
while (true) {
    num = prompt("Please enter an odd number between 1 and 50:");
    if (num && !isNaN(num) && num % 2 === 1 && num >= 1 && num <= 50) {
        break;
    }
    alert("Please try again.");
}
num = parseInt(num);
console.log("Number to skip is: " + num);
for (let i = 1; i <= 50; i += 2) {
    if (i === num) {
        console.log("Yikes! Skipping number: " + num);
        continue;
    }
    console.log("Here is an odd number: " + i);
}


//if (input % 2 === 1 && input >= 1 && input <=50){
//          //if (input >= 1 && input <= 50 && input % 2 !== 0) {
//           if (input % 2 === 1 && input >= 1 && input <=50) {
               // % 2 === 1 && userPromptNum >= 1 && userPromptNum <=50
//              break;
//          }
// }
//         console.log("Skip number: " + input);
//         for (let i = 1; i <= 50; i += 1) {
//             if (i === input) {
//                 console.log("Skip number: " + input);
//                 continue;
//             }
//             console.log("This an odd number: " + input);
//         }
//     }

//Example have photo
// let userPrompt = prompt ('Please enter number between 1-50')
// let userPromptNum; parseFloat(userPrompt);
// while(userPromptNum >= 1 && userPromptNum <= 50 && userPromptNum % 2 !== 0){
// userPrompt = prompt(`Please enter odd number 1-50`);
// userPromptNum = parseInt(userPrompt);
// }
// for (let i = 1; i <=50; i = i + 2) {
//     if (i === userPromptNum) {
//         console.log(`Yikes! skipped #: ${i}`);
//         // continue;
//     } else {
//         console.log(`This is odd ${i}`);
//     }
// }
//
// Prompt user for an odd number between 1 and 50
