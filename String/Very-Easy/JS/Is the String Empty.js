function isEmpty(s) {
	return !s
}

console.log(isEmpty(""), true)
console.log(isEmpty(" "), false)
console.log(isEmpty("            "), false)
console.log(isEmpty("38215"), false)
console.log(isEmpty("afjabsdf"), false)
console.log(isEmpty("!?@&"), false)