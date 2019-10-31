var base = prompt("Introduce la base: ");
var exp = prompt("Introduce el exponente: ");

function calculaPotencia(base, exp) {
    if(exp == 0)
        return 1;
    else if (exp > 0)
        return base * calculaPotencia(base, exp - 1);
    else 
        return 1 / (base * calculaPotencia(base, -exp - 1));
}

document.write(base + " ^ " + exp + " = " + calculaPotencia(base, exp));