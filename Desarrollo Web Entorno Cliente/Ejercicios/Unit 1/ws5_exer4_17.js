for(let i = 1; i <= 10; i++) {
    document.write("<strong>Tabla del " + i + ":</strong><br/>");
    for(let j = 1; j <= 10; j++)
        document.write(i + " x " + j + " = " + (i * j) + "<br/>");
    document.write("<br/>");
}