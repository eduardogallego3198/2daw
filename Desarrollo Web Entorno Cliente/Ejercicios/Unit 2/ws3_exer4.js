var cadena = "esto es una cadena"

function separaConsonantesVocales(cad) {
    let palabras = cad.split();
    let consonantes= "", vocales = "";
    let lisVocales = "AaEeIiOoUu";
    for(let i = 0; i < palabras.length; i++)
        for(let j = 0; j < palabras[i].length; j++) {
            if(lisVocales.match(palabras[i].charAt(j)))
                vocales += palabras[i].charAt(j) + " ";
            else
                consonantes += palabras[i].charAt(j) + " ";
        }
    document.write("Consonantes: " + consonantes + "<br/>");
    document.write("Vocales: " + vocales);
}

separaConsonantesVocales(cadena);
