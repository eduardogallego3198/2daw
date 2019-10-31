var cadena = "Esto Es Una Cadena";

function infoCadena(cad) {
    let cadAux = cad.split(' ');
    let cadAuxMay = [];
    let mayusculas = 0, minusculas = 0;
    for(let i = 0; i < cadAux.length; i++) {
        cadAuxMay[i] = cadAux[i].toUpperCase()
        for(let j = 0; j < cadAux[i].length; j++)
            if(cadAux[i].charAt(j) == cadAuxMay[i].charAt(j))
                mayusculas++;
            else
                minusculas++;
    }
    if(mayusculas == 0)
        return "La cadena está formada sólo por minúsculas";
    else if(minusculas == 0)
        return "La cadena está formada sólo por mayúsculas";
    else
        return "La cadena está formada por " + mayusculas 
                + " mayúsculas y " + minusculas + " minúsculas";
}

document.write(infoCadena(cadena));