var num1 = prompt("Enter a number (Player 1):");
var num2 = prompt("Enter a number (Player 2):");

while(num2 != num1) {
    if (num2 < num1)
        num2 = prompt("Enter a bigger number (Player 2):");
    else 
        num2 = prompt("Enter a minor number (Player 2):");
}

alert("This is the correct number");