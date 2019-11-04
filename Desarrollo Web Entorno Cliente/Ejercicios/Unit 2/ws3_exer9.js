
function palabraRectangulo(pal) {
    document.write("<table><tr>");
    for(let i = 0; i < pal.length; i++)
        document.write("<td>" + pal.charAt(i) + "</td>");
    document.write("</tr>");
    for(let i = 1; i < pal.length - 2; i++)
        document.write("<tr>");
            for(let j = 0; j < pal.length; j++)
                if(j == 0)
                    document.write("<td>" + pal.charAt(i) + "</td>");
                else if(j > 0 && j < pal.length - 1)
        document.write("</tr>");
    document.write("</table>");
}