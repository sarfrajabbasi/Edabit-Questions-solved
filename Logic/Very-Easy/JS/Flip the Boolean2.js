function reverse(bool) {
	return (typeof bool == "boolean") ? !(bool) : "Boolean expected"
}

console.log(reverse(false), true)
console.log(reverse(true), false)
console.log(reverse(0), "boolean expected")
console.log(reverse(null), "boolean expected")
console.log(reverse(undefined), "boolean expected")
console.log(reverse({}), "boolean expected")