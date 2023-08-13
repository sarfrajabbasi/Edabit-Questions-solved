function isSameNum(num1, num2) {
	return num1 === num2
}

console.log(isSameNum(4, 8), false)
console.log(isSameNum(2, 2), true)
console.log(isSameNum(0, 6), false)
console.log(isSameNum(2, "2"), false)