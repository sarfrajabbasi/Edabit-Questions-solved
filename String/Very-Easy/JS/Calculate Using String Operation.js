function calculate(num1, num2, op) {
	return eval(num1 + op +num2)
}
function calculate(num1,num2,op){
    var result;
    switch (op) {
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
                break;
        case "/":
            result = num1 / num2
                break;
        case "*":
            result = num1 * num2
                break;
        case "%":
            result = num1 % num2
            break;
    
        default:"Invalid"
            break;
    }
    return result
}

console.log(calculate(24,100, "-"), -76)
console.log(calculate(-20,-30, "+"), -50)
console.log(calculate(1500,5, "/"), 300)
console.log(calculate(38,3, "*"), 114)
console.log(calculate(49,5, "%"), 4)
