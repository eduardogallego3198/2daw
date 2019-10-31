var array = new Array(10);


function valoresArrayCero(array) {
    let resultado = [];
    for(elem of array)
        resultado.push(0);
    return resultado;
}

function sumaUnoArray(array) {
    let resultado = [];
    for(elem of array) {
        elem++;
        resultado.push(elem);
    }
    return resultado;
}

array = valoresArrayCero(array);
document.write(array + "<br/><br/>");
array = sumaUnoArray(array);
document.write(array + "<br/><br/>");
document.write(array.join(" "));