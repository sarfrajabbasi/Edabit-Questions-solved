function totalCups(n) {
	var freeCup = Math.floor(n/6)
    return n + freeCup
}
console.log(totalCups(6), 7)
console.log(totalCups(3), 3)
console.log(totalCups(7), 8)
console.log(totalCups(12), 14)
console.log(totalCups(213), 248)
console.log(totalCups(16), 18)