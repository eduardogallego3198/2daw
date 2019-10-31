function lanzamiento() {
    let aleatorio = Math.trunc(Math.random() * 6 + 1);
    return aleatorio;
}

document.write("Ha salido " + lanzamiento());