function operate(num1, num2, operator) {
    var sum;
	switch (operator) {
    case "+":
            sum =  num1 + num2
            break;
    case "-":
            sum =  num1 - num2
            break;
    case "/":
            sum =  num1 / num2
            break;
    case "*":
            sum =  num1 * num2
            break;
    case "%":
            sum =  num1 % num2
            break;
        default: "Invalid"
            break;
    }
    return sum;
}

console.log(operate(1, 1, "+"), 2)
console.log(operate(1, 1, "-"), 0)
console.log(operate(1, 1, "*"), 1)
console.log(operate(1, 1, "/"), 1)
console.log(operate(1, 1, "%"), 0)
console.log(operate(2, 1, "+"), 3)
console.log(operate(2, 1, "-"), 1)
console.log(operate(2, 1, "*"), 2)
console.log(operate(2, 1, "/"), 2)
console.log(operate(2, 1, "%"), 0)