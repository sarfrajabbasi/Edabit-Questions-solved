function journeyDistance(num) {
	return ~~(num/2)
	// return Math.floor(num/2)
}


console.log(journeyDistance(0), 0)
console.log(journeyDistance(3), 1)
console.log(journeyDistance(5), 2)
console.log(journeyDistance(9), 4)
console.log(journeyDistance(15), 7)
console.log(journeyDistance(99), 49)
console.log(journeyDistance(11037), 5518)
