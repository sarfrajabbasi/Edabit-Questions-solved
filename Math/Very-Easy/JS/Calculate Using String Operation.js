function calculate(num1, num2, op) {
    var calc;
	switch (op) {
     case '-':
            calc = num1 - num2
            break;
     case "+":
        calc = num1 + num2
            break;
     case "/":
        calc = num1 / num2
            break;
     case "*":
        calc = num1 * num2
            break;
     case "%":
        calc = num1 % num2
            break;
        default:"invalid"
            break;
    }
    return calc
}

console.log(calculate(24,100, "-"), -76)
console.log(calculate(-20,-30, "+"), -50)
console.log(calculate(1500,5, "/"), 300)
console.log(calculate(38,3, "*"), 114)
console.log(calculate(49,5, "%"), 4)
