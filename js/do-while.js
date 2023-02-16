function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let i = 1; i <=1; i = i + 1){
    let myRandomNum = randomNumber(1, 5)
    //console.log(myRandomNum)
    let output = `${myRandomNum} cones sold`
    console.log(output)
}
