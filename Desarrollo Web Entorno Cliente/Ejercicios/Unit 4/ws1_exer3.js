var inicio = new Date();

function tiempoCarga() {
    var fin = new Date();
    var tiempo = (fin - inicio) / 1000;
    alert("La página se ha cargado en " + tiempo + " segundos");
}

window.onload = function () { tiempoCarga(); }