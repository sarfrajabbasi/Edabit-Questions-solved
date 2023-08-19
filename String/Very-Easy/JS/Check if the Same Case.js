function sameCase(str) {
	return str.toUpperCase() == str || str.toLowerCase() ==str
}

console.log(sameCase("HELLO"), true)
console.log(sameCase("HEllo"), false)
console.log(sameCase("mArmALadE"), false)
console.log(sameCase("marmalade"), true)
console.log(sameCase("MARMALADE"), true)
console.log(sameCase("ketchUP"), false)
console.log(sameCase("pickle"), true)
console.log(sameCase("MUSTARD"), true)