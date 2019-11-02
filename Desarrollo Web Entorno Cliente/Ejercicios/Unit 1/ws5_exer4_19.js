var width = parseInt(prompt("Enter column width in pixels:"));

document.write("<table>");
for(let i = 1; i <= 8; i++) {
    document.write("<tr width=" + width + ">");
    for(let j = 1; j <= 8; j ++) {
        if(i % 2 != 0)
            if(j % 2 != 0)
                document.write("<td id= '{black}' width=" + width + "></td>");
            else
                document.write("<td width=" + width + "></td>");
        else
            if(j % 2 == 0)
                document.write("<td id=\"black\" width=" + width + "></td>");
            else
                document.write("<td width=" + width + "></td>");
    }
    document.write("</tr>");
}
document.write("</table>");