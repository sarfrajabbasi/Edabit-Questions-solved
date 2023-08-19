function ctoa(c) {
	return c.charCodeAt(0)
}

console.log(ctoa(' '), 32)
console.log(ctoa('A'), 65)
console.log(ctoa(']'), 93)
console.log(ctoa('^'), 94)
console.log(ctoa('c'), 99)