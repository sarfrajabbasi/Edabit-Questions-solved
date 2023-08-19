function toArray(str) {
	return str.split(",")
}

console.log(toArray("watermelon, raspberry, orange"), ["watermelon", "raspberry", "orange"])
console.log(toArray("x1, x2, x3, x4, x5"), ["x1", "x2", "x3", "x4", "x5"])
console.log(toArray("a, b, c, d"), ["a", "b", "c", "d"])
console.log(toArray(""), [])