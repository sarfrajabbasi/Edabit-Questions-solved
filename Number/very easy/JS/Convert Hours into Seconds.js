function howManySeconds(hours) {
	return hours *(60 *60)
}

console.log(howManySeconds(2), 7200)
console.log(howManySeconds(10), 36000)
console.log(howManySeconds(24), 86400)
console.log(howManySeconds(36), 129600)