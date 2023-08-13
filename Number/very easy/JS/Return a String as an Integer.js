function stringInt(str) {
	return +(str)
}

console.log(stringInt("6"), 6)
console.log(stringInt("2"), 2)
console.log(stringInt("10"), 10)
console.log(stringInt("666"), 666)