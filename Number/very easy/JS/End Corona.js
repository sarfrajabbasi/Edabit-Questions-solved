function endCorona(recovers, newCases, activeCases) {
	return Math.ceil(activeCases/(recovers-newCases))
}

console.log(endCorona(4000, 2000, 77000), 39)
console.log(endCorona(3000, 2000, 50699), 51)
console.log(endCorona(30000, 25000, 390205), 79)
console.log(endCorona(260000, 255000, 20511691), 4103)