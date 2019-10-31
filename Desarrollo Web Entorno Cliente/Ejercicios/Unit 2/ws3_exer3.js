var cadena = "esto es una cadena";

function localizaFragmento(cad, frag) {
    let res = [...cad.matchAll(frag)];
    if(res.length > 0 && res.length < 2)
        document.write("Se ha encontrado una coincidencia");
    else if(res.length > 1)
        document.write("Se han encontrado " + res.length + " coincidencias");
    else
        document.write("No se han encontrado coincidencias");
}

localizaFragmento(cadena, "una");
