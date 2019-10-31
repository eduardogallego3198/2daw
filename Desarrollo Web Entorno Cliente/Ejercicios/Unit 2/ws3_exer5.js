var cadena = "esto es una cadena";

function eliminaRepetidos(cad) {
    let res = "";
    for(let i = 0; i < cad.length; i++)
        if(cad.charAt(i) == cad.charAt(i + 1))
            res += cad.charAt(j);
    return res; //esto unacdn
}

document.write(eliminaRepetidos(cadena));