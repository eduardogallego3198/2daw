var x, y;

window.onload = function () {
    addEventListener("mousemove", function (e) {
        x = e.clientX;
        y = e.clientY;
    });
}

function muestraMovimiento() {
    document.getElementById("posx").innerHTML = "X: " + x;
    document.getElementById("posy").innerHTML = "Y: " + y;
}