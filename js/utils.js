const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

if (typeof userNumber === "string" || isNaN(userNumber) !== false) {
    alert(`That is not a number!`)


//Random Function
    function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min+ 10 + 1) + min);
    }
}