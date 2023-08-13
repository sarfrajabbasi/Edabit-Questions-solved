function validStrNumber(n) {
	return !Number.isNaN(+n)
}
console.log(validStrNumber("3.2"), true)
console.log(validStrNumber("324"), true)
console.log(validStrNumber("54..4"), false)
console.log(validStrNumber("number"), false)
console.log(validStrNumber(".5"), true)
console.log(validStrNumber("03"), true)
console.log(validStrNumber("3.e"), false)
console.log(validStrNumber("1234321"), true)
console.log(validStrNumber(".42.3"), false)
console.log(validStrNumber("0000000"), true)
console.log(validStrNumber("000.000"), true)