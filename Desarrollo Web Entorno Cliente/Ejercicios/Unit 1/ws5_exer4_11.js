var cols = parseInt(prompt("Enter number of columns:"));
var height = parseInt(prompt("Enter column height in pixels:"));
var width = parseInt(prompt("Enter column width in pixels:"));

document.write("<table>");
document.write("<tr height=" + height + ">");
for (let i = 0; i < cols; i++)
    document.write("<td width=" + width + "></td>");
document.write("</tr>");
document.write("</table>");