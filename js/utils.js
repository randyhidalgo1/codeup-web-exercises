const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

if (typeof userNumber === "string" || isNaN(userNumber) !== false) {
    alert(`That is not a number!`)
