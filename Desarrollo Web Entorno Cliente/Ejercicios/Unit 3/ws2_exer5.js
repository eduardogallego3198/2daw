var numeros = paresImpares();

function paresImpares() {
    let numeros = [];
    for(let i = 0; i < 100; i++) {
        let aleatorio = Math.trunc(Math.random() * 1000 + 1);
        numeros[i] = aleatorio;
    }
    return numeros;
}

function ordenaParesImpares(numeros) {
    let resultado = [];
    for(n of numeros)
        n % 2 == 0 ? resultado.unshift(n) : resultado.push(n);   
    return resultado;
}

document.writeln(numeros + "<br/><br/>");
numeros = ordenaParesImpares(numeros);
document.writeln(numeros);