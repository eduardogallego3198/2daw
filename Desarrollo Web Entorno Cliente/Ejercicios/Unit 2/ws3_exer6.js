var cadenaSub = "esto es una cadena de prueba";
var cadenaSub2 = "una cadena";
var cadenaNoSub = "segunda cadena de prueba";
var cadenaNoSub2 = "algo";


function compruebaSubcadena(cad, cad2) {
    let pos = "";
    if(cad.includes(cad2)) {
        pos = cad.indexOf(cad2);
        if(pos != null)
            document.write("La segunda cadena es subcadena de la primera a partir de la " 
                    + "posición " + pos + "<br/>");
    } else 
        document.write("La segunda cadena no es subcadena de la primera <br/>");
}

compruebaSubcadena(cadenaSub, cadenaSub2);
compruebaSubcadena(cadenaNoSub, cadenaNoSub2);
