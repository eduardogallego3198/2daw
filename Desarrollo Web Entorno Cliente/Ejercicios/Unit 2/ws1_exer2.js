var fechaHoy = new Date();
var fecha85 = cambiaDias(new Date(fechaHoy), 85, "suma");
var fecha187 = cambiaDias(new Date(fechaHoy), 187, "resta");
var fecha85_2 = sumaAnos(new Date(fecha85), 2);
var fecha187_2 = restaHoras(new Date(fecha187), 24);
var fechaResto = new Date(fecha85 - fecha187);

function cambiaDias(fecha, dias, operacion) {
    if (operacion == "suma") {
        fecha.setDate(fecha.getDate() + dias);
        return fecha;
    } else if(operacion == "resta") {
        fecha.setDate(fecha.getDate() - dias);
        return fecha;
    }
}

function sumaAnos(fecha, anos) {
    fecha.setFullYear(fecha.getFullYear() + anos);
        return fecha;
}

function restaHoras(fecha, horas) {
    fecha.setHours(fecha.getHours() + horas);
        return fecha;
}

document.write("Fecha de hoy: " + fechaHoy.getDate() + "/" + (fechaHoy.getMonth() + 1) + "/" + fechaHoy.getFullYear() + "<br/>");
document.write("Fecha dentro de 85 días: " + fecha85.getDate() + "/" + (fecha85.getMonth() + 1) + "/" + fecha85.getFullYear() + "<br/>");
document.write("Fecha hace 187 días: " + fecha187.getDate() + "/" + (fecha187.getMonth() + 1) + "/" + fecha187.getFullYear() + "<br/>");
document.write("Fecha dentro de 2 años y 85 días: " + fecha85_2.getDate() + "/" + (fecha85_2.getMonth() + 1) + "/" + fecha85_2.getFullYear() + "<br/>");
document.write("Fecha hace 187 días y 24 horas: " + fecha187_2.getDate() + "/" + (fecha187_2.getMonth() + 1) + "/" + fecha187_2.getFullYear() + "<br/>");
document.write("Fecha resto: " + fechaResto.getDate() + "/" + (fechaResto.getMonth() + 1) + "/" + fechaResto.getFullYear());