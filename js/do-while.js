// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// for (let i = 1; i <=1; i = i + 1){
//     let myRandomNum = randomNumber(1, 5)
//     //console.log(myRandomNum)
//     let output = `${myRandomNum} cones sold`
//     console.log(output)
// }

let conesInventory = randomNumber(50, 100);
do {
    let conesWanted = randomNumber(1, 5);
    if (conesWanted > conesInventory){
        console.log(`Cannot sell you ${conesWanted} I only have ${conesInventory}`);
        console.log(`${conesInventory} sold...`);
        conesInventory = 0;
    } else {
    console.log(`${conesWanted} sold`);
       conesInventory = conesInventory - conesWanted;
       }
       console.log(`${conesInventory} left`);
       } while(conesInventory > 0);
       console.log(`sold them all`);
