function operation(num1, num2) {
	return (num1 +num2 ==24)? "added" :(num1-num2==24)? "subtracted":(num1*num2==24)? "multiplied": (num1/num2==24)? "divided":null 
}

console.log(operation(12, 12), "added")
console.log(operation(100, 76), "subtracted")
console.log(operation(6, 4), "multiplied")
console.log(operation(528, 22), "divided")
console.log(operation(10, 12), null)