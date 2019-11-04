function inicio() {
    var tabla = document.createElement("table");
    document.body.append(tabla);
    for(let i = 0; i < 100; i++) {
        var fila = document.createElement("tr");
        tabla.append(fila);
        for(let j = 0; j < 100; j++) {
            var celda = document.createElement("td");
            celda.addEventListener("mouseover", function (e) {
                pintar(e); borrar(e); borrarCompleto(e);
            });
            fila.append(celda);
        }
    }
    addEventListener("keypress", function (e) {
        
    });
    document.querySelector("table").style.border = "1px solid";
}

function pintar(e) {
    if(e.ctrlKey)
        e.target.style.backgroundColor = "red" 
    else if(e.shiftKey)
        e.target.style.backgroundColor = "blue";
}

function borrar(e) {
    if(e.buttons == 4)
        e.target.style.backgroundColor = "white";
}

function borrarCompleto(e) {
    if(e.altKey) {
        document.querySelector("table").remove();
        inicio();
    }
}