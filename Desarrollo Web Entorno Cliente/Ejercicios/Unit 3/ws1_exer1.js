var num1 = prompt("Introduce primer número: ");
var num2 = prompt("Introduce segundo número: ");
var num3 = prompt("Introduce tercer número: ");
var num4 = prompt("Introduce cuarto número: ");

function maximo(num1, num2, num3, num4) {
    let res = 0;
    num1 > num2 ? res = num1 : res = num2;
    res > num3 ? res = res : res = num3;
    res > num4 ? res = res : res = num4;
    return res;
}

document.write("El número máximo es " + maximo(num1, num2, num3, num4));
