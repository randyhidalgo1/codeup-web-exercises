//  let input;{
//      while (true)   {
//          let input = prompt("Enter odd number between 1-50:");
//          //console.log(input);
//          //if (input % 2 === 1 && input >= 1 && input <=50){
//          //if (input >= 1 && input <= 50 && input % 2 !== 0) {
//           if (input % 2 === 1 && input >= 1 && input <=50) {
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
let userPrompt = prompt ('Please enter number between 1-50')
let userPromptNum; parseFloat(userPrompt);{
while(userPromptNum % 2 === 1 && userPromptNum >= 1 && userPromptNum <=50){
userPrompt = prompt(`Please enter odd number 1-50`);
userPromptNum = parseInt(userPrompt);
}
for (let i = 1; i <=50; i = i + 2){
    if (i === userPromptNum){
        console.log(`Yikes! skipped #: ${i}`);
        //continue
    } else {
        console.log(`This is odd ${i}`);


//     let (userPromptNum === % 2 = 1 && userPromptNum >= 1 && userPromptNum <= 50){
//         break;
//     }
// }
//     for (let i = 1, i <= 50; i = i + 2){
//         if (i === userpromptNum) {
//             console.log('yikes!${i)');
//             continue;
//         }
//         console.log(` odd number${i}`)
