function isTriangle(a, b, c) {
	return  b+c>a && c+a >b && a+b>c 
}

console.log(isTriangle(4, 5, 6), true)
console.log(isTriangle(3, 4, 6), true)
console.log(isTriangle(2, 5, 7), false)
console.log(isTriangle(2, 5, 9), false)
console.log(isTriangle(2, 9, 5), false)
console.log(isTriangle(9, 2, 5), false)
console.log(isTriangle(11, 12, 20), true)
console.log(isTriangle(14, 3, 12), true)
console.log(isTriangle(23, 4, 28), false)
console.log(isTriangle(21, 4, 25), false)