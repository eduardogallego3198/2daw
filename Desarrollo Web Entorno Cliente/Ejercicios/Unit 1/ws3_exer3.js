const maxAge = 100;
var age, amountPerDay;

function calculateSupply(age, amountDay) {
    let amount = Math.round((amountDay * 365) * (maxAge - age));
    alert("You will need " + amount + " to last you until the ripe old age of " + maxAge);
}

for (let i = 0; i < 3; i++) {
    age = parseInt(prompt("Enter your age:"));
    amountPerDay = parseFloat(prompt("Enter amount per day:"));
    calculateSupply(age, amountPerDay);
}