var dado = lanzamiento6000();

function lanzamiento6000() {
    let uno = 0, dos = 0, tres = 0, cuatro = 0, cinco = 0, seis = 0;
    for(let i = 0; i < 6000; i++) {
        let aleatorio = Math.trunc(Math.random() * 6 + 1);
        aleatorio == 1 ? uno++ : aleatorio == 2 ? dos++ : aleatorio == 3 ? 
        tres++ : aleatorio == 4 ? cuatro++ : aleatorio == 5 ? cinco++ : seis++;
    }
    return [uno, dos, tres, cuatro, cinco, seis];
}

document.write("Ha salido uno " + dado[0] + " veces<br/>");
document.write("Ha salido dos " + dado[1] + " veces<br/>");
document.write("Ha salido tres " + dado[2] + " veces<br/>");
document.write("Ha salido cuatro " + dado[3] + " veces<br/>");
document.write("Ha salido cinco " + dado[4] + " veces<br/>");
document.write("Ha salido seis " + dado[5] + " veces");