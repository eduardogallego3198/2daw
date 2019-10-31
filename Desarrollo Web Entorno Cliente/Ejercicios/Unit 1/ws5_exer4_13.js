var cols = parseInt(prompt("Enter number of columns:"));
var height = parseInt(prompt("Enter column height in pixels:"));
var width = parseInt(prompt("Enter column width in pixels:"));
var col = 0;

document.write("<table>");
document.write("<tr height=" + height + ">");
while(col < cols) {
    document.write("<td width=" + width + "></td>");
    col++;
}
document.write("</tr>");
document.write("</table>");