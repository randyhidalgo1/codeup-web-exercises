
const showMultiplicationTable=(num)=> {
    for (let i = 1; i <= 10; i = i +1){
    console.log(`${num} * ${i}= ${num * i}`)
    }
}
(showMultiplicationTable(7))


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let i = 1; i <=10; i = i + 1){
    let myRandomNum = randomNumber(20, 200)
     //console.log(myRandomNum)
    if (myRandomNum % 2 ===0){ //if is even
        let output = `${myRandomNum} is even.`
        console.log(output)
    } else { // else is odd
        let output = `${myRandomNum} is odd.`
        console.log(output)
     }
}

for (let i = 1; i <= 9; i++) {
    let output = '';
    for (let j = 1; j <= i; j++) {
        output += i;
    }
    console.log(output);
}

for (let i = 100; i >= 5; i -= 5) {
   console.log(i);
}


let num = 10 + 2;

if (num > 2 && num < 20){
    console.log("TRUE")
} else {
    console.log("FALSE")
}



let user = "employee";

if(user === 'employee') {
    console.log("Successfully Logged in");
} else if ("guest") {
    console.log("Login Denied");
}

let myName = "randy"
let nameLength = myName.length;

if (nameLength === 5) {
    alert("Exactly")
} else if (nameLength >=5) {
    alert("Over 5")
} else  {
    alert("under 5");
}





