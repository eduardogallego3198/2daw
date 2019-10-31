var celsius, fahrenheit;

function celsiusToFahrenheit(celsius) {
    let celToFahr = (celsius * 9 / 5) + 32;
    alert(celsius + "ºC is " + celToFahr + "ºF");
}

function fahrenheitToCelsius(fahrenheit) {
    let fahrToCel = (fahrenheit - 32) * 5 / 9;
    alert(fahrenheit + "ºF is " + fahrToCel + "ºC")
}

celsius = prompt("Enter a temperature in celsius:");
celsiusToFahrenheit(celsius);
fahrenheit = prompt("Enter a temperature in fahrenheit:");
fahrenheitToCelsius(fahrenheit);                                                