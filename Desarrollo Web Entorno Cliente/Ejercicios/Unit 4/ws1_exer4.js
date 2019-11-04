window.onload = function () {
    document.write("<table>");
    for(let i = 0; i < 100; i++) {
        document.write("<tr>");
        for(let j = 0; j < 100; j++)
            document.write("<td onmouseover='pintar(event)'></td>");
        document.write("</tr>");
    }
    document.write("</table>");
    document.querySelector("table").style.border = "1px solid";
}

function pintar(e) {
    if(e.ctrlKey)
        e.target.style.backgroundColor = "red";
    else if (e.shiftKey)
        e.target.style.backgroundColor = "blue";
}