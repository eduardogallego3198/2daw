var radio = prompt("Introduce el radio: ");

function volumen(radio) {
    let vol = (4 / 3) * Math.PI * Math.pow(radio, 3);
    return vol;
}

document.write("El volumen es: " + volumen(radio));