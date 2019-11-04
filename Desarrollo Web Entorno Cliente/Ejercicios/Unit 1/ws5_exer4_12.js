var cols = parseInt(prompt("Enter number of columns:"));
var height = parseInt(prompt("Enter column height in pixels:"));
var width = parseInt(prompt("Enter column width in pixels:"));

document.write("<table border=1>");
document.write("<tr height=" + height + ">");
for (let i = 0; i < cols; i++)
    if(i % 2 == 0)
        document.write("<td id=\"black\" width=" + width + ">&nbsp;</td>");
    else 
        document.write("<td width=" + width + "></td>");
document.write("</tr>");
document.write("</table>");