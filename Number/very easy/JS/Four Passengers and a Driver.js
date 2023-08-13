function carsNeeded(n) {
	return Math.ceil(n/5)
}

console.log(carsNeeded(0), 0)
console.log(carsNeeded(1), 1)
console.log(carsNeeded(4), 1)
console.log(carsNeeded(5), 1)
console.log(carsNeeded(6), 2)
console.log(carsNeeded(18), 4)