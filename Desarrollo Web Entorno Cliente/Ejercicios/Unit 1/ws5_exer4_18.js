var cols = parseInt(prompt("Enter number of columns:"));
var rows = parseInt(prompt("Enter number of rows:"));
var height = parseInt(prompt("Enter column height in pixels:"));
var width = parseInt(prompt("Enter column width in pixels:"));

document.write("<table>");
for(let i = 0; i < rows; i++) {
    document.write("<tr height=" + height + ">");
    for (let j = 0; j < cols; j++)
        document.write("<td width=" + width + "></td>");
    document.write("</tr>");
}
document.write("</table>");