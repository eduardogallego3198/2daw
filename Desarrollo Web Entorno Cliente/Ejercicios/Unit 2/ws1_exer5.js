function ej5(cadena) {
    let aux = "";
    for(let i = 0; i < cadena.length; i++)
        aux = cadena.charAt(i);
        for(let j = 1; j < cadena.length; j++)
            if(aux == cadena.charAt(j))
                cadena.replace('a', '');
}