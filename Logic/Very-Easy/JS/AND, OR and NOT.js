function NOT(n) {
	return +(!n)
}

function AND(a, b) {
	return a && b
}
function OR(a, b) {
	return a||b
}

console.log(AND(1, 1), 1)
console.log(OR(1, 1), 1)
console.log(AND(0, 1), 0)
console.log(AND(0, 0), 0)
console.log(OR(0, 1), 1)
console.log(OR(1, 0), 1)
console.log(OR(0, 0), 0)
console.log(NOT(0), 1)
console.log(AND(1, 0), 0)
console.log(NOT(1), 0)