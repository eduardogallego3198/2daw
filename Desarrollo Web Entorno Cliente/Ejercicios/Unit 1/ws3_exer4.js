var radius;

function calcCircunference(radius) {
    let circun = 2 * Math.PI * radius;
    alert("The circunference is " + circun);
}

function calcArea(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    alert("The area is: " + area);
}

radius = prompt("Enter circle radius:");
calcCircunference(radius);
calcArea(radius);