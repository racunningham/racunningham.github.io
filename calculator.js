let x;
let op;
let y;
let ans;
let ansMax = Number.MIN_VALUE;
let ansMin = Number.MAX_VALUE;
let isDone = 0;
let i = 0;
let tot = 0;
document.write("<table>");
document.write("<tr><th>X</th><th>OP</th><th>Y</th><th>Result</th></tr>")
while(isDone !== false) {
    x = Number(prompt("Value of x").replace(/\s+/g, ' ').trim());
    op = prompt("Operator").replace(/\s+/g, ' ').trim();
    y = Number(prompt("Value of y").replace(/\s+/g, ' ').trim());
    switch (op) {
        case "+":
            ans = (x + y);
            break;
        case "-":
            ans = x - y;
            break;
        case "*":
            ans = x * y;
            break;
        case "/":
            ans = x / y;
            break;
        case "%":
            ans = x % y;
            break;
        default:
            ans = "computation error";
    }

    if(!isNaN(ans)){
        document.write("<tr><td>" + x + "</td>" + "<td>" + op + "</td>" + "<td>" + y +"</td>" + "<td>" + ans + "</td></tr>");
        tot = tot + ans;
        i++;
        if(ans > ansMax){
            ansMax = ans;
        }
        if(ans < ansMin){
            ansMin = ans;
        }
    } else if(ans === "computation error") {
        document.write("<tr><td>" + x + "</td>" + "<td>" + op + "</td>" + "<td>" + y +"</td>" + "<td>" + "computation error" + "</td></tr>");
    } else{
        document.write("<tr><td>" + x + "</td>" + "<td>" + op + "</td>" + "<td>" + y +"</td>" + "<td>" + "Wrong input number" + "</td></tr>");
    }

    isDone = confirm("Continue?");

}

let avg = (tot / i);

document.write("<table>");
document.write("<tr><th>" + "Min" + "</th><th>" + "Max" + "</th><th>" + "Average" + "</th><th>" + "Total" + "</th></tr>" + "<tr><td>" + ansMin + "</td><td>" + ansMax + "</td><td>" + avg + "</td><td>" + tot + "</td></tr>");
document.write("</table>");
document.write("</table>");
