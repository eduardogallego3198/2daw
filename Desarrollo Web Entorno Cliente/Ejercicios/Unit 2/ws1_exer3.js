var tiempoTotal = 60;

function actualizarContador() {
    if(tiempoTotal == 0)
        alert("Final");
    else {
        document.write(tiempoTotal + " ");
        tiempoTotal -= 1;
        setTimeout(actualizarContador, 1000);
    }     
}

actualizarContador();