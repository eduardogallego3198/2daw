window.onload = function () {
    var nombre = document.getElementById("nombre").innerHTML;
    var erNombre = /\w+?\d{1,}\W{1,}/;
    window.addEventListener("keyup", function (e) {
        if(e.key == "Tab" && nombre.length >= 8 && erNombre.test(nombre)) {
            document.write("tab");
            document.getElementById("nombre").style.backgroundColor = "green";
        }
    });
}