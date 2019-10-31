function factorial(num) {
    let fact = 1
    if(num >= 0) {
        while(num > 0) {
            fact *= num;
            num--;
        }
        return fact;
    }
}

document.write("<table>");
for(let i = 1; i <= 10; i++)
    document.write("<tr><td>" + i + "!</td><td>" + factorial(i) + "</td></tr>");
document.write("</table>");