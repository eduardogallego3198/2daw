var cadena = "  esto es  una cadena  ";

function cuentaPalabras(cad) {
    let palabras = [];
    let pos = 0; let blancos = 0;
    cad = cad.trim();
    for(let i = 0; i < cad.length; i++)
        if(cad.charAt(i) != " ") {
            if(blancos >= 1)
                pos++;
            blancos = 0;
            palabras[pos] += cad.charAt(i);
        } 
    else
        blancos++;
    return palabras.length;
}

document.write("La cadena contiene "+ cuentaPalabras(cadena) + " palabras");