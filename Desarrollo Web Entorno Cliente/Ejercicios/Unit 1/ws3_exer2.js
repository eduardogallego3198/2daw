var birYear;
const curYear = parseInt(new Date().getFullYear());

function calculateAge(birYear, curYear) {
    let age1 = curYear - birYear - 1;
    let age2 = age1 + 1;
    alert("You are either " + age1 + " and " + age2);
}

for (let i = 0; i < 3; i++) {
    birYear = prompt("Enter your birth year:");
    calculateAge(birYear, curYear);
}