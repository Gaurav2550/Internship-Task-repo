let num1 = Number(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = Number(prompt("Enter second number:"));

let result;

if (operator == "+") {
    result = num1 + num2;
} 
else if (operator == "-") {
    result = num1 - num2;
} 
else if (operator == "*") {
    result = num1 * num2;
} 
else if (operator == "/") {
    if (num2 != 0) {
        result = num1 / num2;
    } else {
        result = "Division by zero is not allowed";
    }
} 
else {
    result = "Invalid Operator";
}

console.log("Result = " + result);
alert("Result = " + result);