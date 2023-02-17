// const formatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
// });
//
// if (typeof userNumber === "string" || isNaN(userNumber) !== false) {
//     alert(`That is not a number!`)
//
//
// //Random Function
    function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
// function arrayOfRandomNumbers(lengthOfArray){
//     const array = new Array(lengthOfArray);
//
// //OR
function arrayOfRandomNumbers(lengthOfArray){
    const array = [];
    for (let i = 0; i < lengthOfArray; i++){
        let newRandomNumber = randomNumber(1, lengthOfArray +100);
        while(array.includes(newRandomNumber)){
            newRandomNumber = randomNumber(1, 100);
        }

        array.push(newRandomNumber);
    }
    return array
}
//call arrayOfRandomNumbers in brower!

