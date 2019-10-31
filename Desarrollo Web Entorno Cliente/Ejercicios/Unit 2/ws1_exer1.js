var fecha = new Date();

function fechaLetra() {
    switch(fecha.getMonth()) {
        case 0: return "Enero"; case 1: return "Febrero";
        case 2: return "Marzo"; case 3: return "Abril";
        case 4: return "Mayo"; case 5: return "Junio";
        case 6: return "Julio"; case 7: return "Agosto";
        case 8: return "Septiembre"; case 9: return "Octubre";
        case 10: return "Noviemre"; case 11: return "Diciembre";
    }
}

document.write("Año actual: " + fecha.getFullYear() + "<br/>");
document.write("Mes actual: " + fechaLetra() + "<br/>");
document.write("Día actual: " + fecha.getDate() + "<br/>");
document.write("Hora actual: " + fecha.getHours() + "<br/>");
document.write("Minutos actuales: " + fecha.getMinutes() + "<br/>");
document.write("Segundos actuales: " + fecha.getSeconds());