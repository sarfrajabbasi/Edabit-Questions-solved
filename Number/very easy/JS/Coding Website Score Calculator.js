function scoreCalculator(easy, med, hard) {
	return (easy <0 || med <0|| hard<0)? "Invalid"  : easy*5 + med*10 +hard*20
}

console.log(scoreCalculator(4, 2, 7), 180, "Test 1")
console.log(scoreCalculator(3, 12, 0), 135, "Test 2")
console.log(scoreCalculator(5, -5, 2), "invalid", "Test 3")
console.log(scoreCalculator(20, 7, 3), 230)
console.log(scoreCalculator(0, 0, 0), 0)
console.log(scoreCalculator(1, 2, 3), 85)