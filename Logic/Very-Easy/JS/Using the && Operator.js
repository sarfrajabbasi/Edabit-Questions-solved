function and(a, b) {
	return a && b
}

console.log(and(true, true), true)
console.log(and(true, false), false)
console.log(and(false, true), false)
console.log(and(false, false), false)