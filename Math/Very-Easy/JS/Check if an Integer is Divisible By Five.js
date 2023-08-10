function divisibleByFive(n) {
	return n%5 ==0
}

console.log(divisibleByFive(7), false)
console.log(divisibleByFive(5), true)
console.log(divisibleByFive(15), true)
console.log(divisibleByFive(33), false)
console.log(divisibleByFive(-18), false)
console.log(divisibleByFive(999), false)
console.log(divisibleByFive(2), false)