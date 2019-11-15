window.onload = () => {
    var lista = document.createElement("ul");
    var boton = document.createElement("button");
    for(let i = 0; i < 5; i++) {
        var elem = document.createElement("li");
        elem.textContent = "Elemento " + (i + 1);
        lista.appendChild(elem);
    }
    boton.textContent = "Click aquí";
    document.body.appendChild(lista);
    document.body.appendChild(boton);
    boton.onclick = () => {
        var elemclick = document.createElement("li");
        elemclick.textContent = "Otro elemento";
        lista.appendChild(elemclick);
    }
}