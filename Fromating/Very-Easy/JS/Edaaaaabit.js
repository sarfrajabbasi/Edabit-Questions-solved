function howManyTimes(num) {
	return "Ed" + "a".repeat(num) + "bit"
}
function howManyTimes(num) {
    let a = "a".repeat(num)
	return `Ed${a}bit`
}

console.log(howManyTimes(5), "Edaaaaabit")
console.log(howManyTimes(15), "Edaaaaaaaaaaaaaaabit")
console.log(howManyTimes(10), "Edaaaaaaaaaabit")
console.log(howManyTimes(23), "Edaaaaaaaaaaaaaaaaaaaaaaabit")
console.log(howManyTimes(1), "Edabit")