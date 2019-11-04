var cadena = "holaaloh";

function palindromo(cad) {
    let coincidencias = 0;
    if(cadena.length % 2 == 0) {
        for(let i = 0; i < cad.length / 2; i++)
            if(cad.charAt(i) == cad.charAt(cad.length - 1 - i))
                coincidencias++;
    } else {
        for(let i = 0; i < cad.length / 2; i++)
            if(cad.charAt(i) == cad.charAt(cad.length - 1 - i))
                coincidencias++;
    }
    if(coincidencias >= cad.length / 2)
        return true;
    else
        return false;
} 

if(palindromo(cadena))
    document.write("La cadena es un palíndromo");
else 
    document.write("La cadena no es un palíndromo");