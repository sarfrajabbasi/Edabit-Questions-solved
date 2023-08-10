function divisible(num) {
	return  num %100 == 0
}

console.log(divisible(1), false)
console.log(divisible(100), true)
console.log(divisible(1000), true)
console.log(divisible(111000), true)
console.log(divisible(-1), false, "Don't forget negatives.")
console.log(divisible(0), true, "Cover the 0 cases.")
console.log(divisible(-100), true, "-100 is divisible by 100.")