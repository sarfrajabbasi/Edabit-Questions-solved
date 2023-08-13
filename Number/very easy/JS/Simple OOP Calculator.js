class Calculator {
	// Write functions to add(), subtract(), multiply() and divide()
    add(a,b){
        return a+b
    }
    subtract(a,b){
        return a-b
    }
    multiply(a,b){
        return a*b
    }
    divide(a,b){
        return a/b
    }
}

var calculator = new Calculator()
console.log(calculator.add(5,5), 10, "5 + 5 = 10")
console.log(calculator.add(20,5), 25, "20 + 5 = 25")
console.log(calculator.subtract(30,5), 25, "30 - 5 = 25")
console.log(calculator.subtract(100,5), 95, "100 - 5 = 95")
console.log(calculator.multiply(5,5), 25, "5 * 5 = 25")
console.log(calculator.multiply(100,5), 500, "100 * 5 = 500")
console.log(calculator.divide(10,5), 2, "10 / 5 = 2")
console.log(calculator.divide(100,5), 20, "100 / 5 = 20")