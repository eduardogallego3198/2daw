var cadena = "esto es una cadena";

function invierteCadena(cad) {
    let res = "";
    for(let i = 0; i < cad.length; i++)
        res += cad.charAt(cad.length - 1 - i);
    return res;
}

function inviertePalabras(cad) {
    let palabras = cad.split(' ');
    let res = "";
    for(let i = 0; i < palabras.length; i++) {
        for(let j = 0; j < palabras[i].length; j++)
            res += palabras[i].charAt(palabras[i].length - 1 - j);
        res += " ";
    }
    return res;
}

function encuentraPalabraMasLarga(cad) {
    let palabras = cad.split(' ');
    let res = palabras[0];
    for(let i = 0; i < palabras.length; i++)
        if(palabras[i].length > res.length)
            res = palabras[i];
    return res;
}

function filtraPalabrasMasLargas(cad, long) {
    let palabras = cad.split(' ');
    let res = 0;
    for(let i = 0; i < palabras.length; i++)
        if(palabras[i].length > long)
            res++;
    return res;
}

function cadenaBienFormada(cad) {
    let res = "";
    res += cad.charAt(0).toUpperCase();
    for(let i = 1; i < cad.length; i++)
        res += cad.charAt(i).toLowerCase();
    return res;
}

document.write("Cadena original: " + cadena + "<br/>");
document.write("Cadena invertida: " + invierteCadena(cadena) + "<br/>");
document.write("Palabras invertidas: " + inviertePalabras(cadena) + "<br/>");
document.write("Palabra más larga: " + encuentraPalabraMasLarga(cadena) + "<br/>");
document.write("Palabras mayores de 2 caracteres: " + filtraPalabrasMasLargas(cadena, 2) + "<br/>");
document.write("Cadena bien formada: " + cadenaBienFormada(cadena));