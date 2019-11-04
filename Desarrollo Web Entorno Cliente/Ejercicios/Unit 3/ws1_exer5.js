var radio = prompt("Introduce el radio: ");

function volumen(radio) {
    let vol = (4 / 3) * Math.PI * Math.pow(radio, 3);
    return vol;
}

function area(radio) {
    let area = Math.PI * Math.pow(radio, 2);
    return area;
}

document.write("El volumen es: " + volumen(radio) + " y el area es " 
                + area(radio));