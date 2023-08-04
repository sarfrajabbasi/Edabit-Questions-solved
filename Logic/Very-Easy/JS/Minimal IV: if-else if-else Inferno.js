function equilibrium (x) {
	return (x>0)? "positive" : (x<0)? "negative" : true
}

console.log(equilibrium(0.000), true)
console.log(equilibrium(0), true)

console.log(equilibrium(3), "positive")
console.log(equilibrium(66), "positive")
console.log(equilibrium(5425), "positive")
console.log(equilibrium(1111.1), "positive")
console.log(equilibrium(0.0001), "positive")

console.log(equilibrium(-3), "negative")
console.log(equilibrium(-66), "negative")
console.log(equilibrium(-5425), "negative")
console.log(equilibrium(-1111.1), "negative")
console.log(equilibrium(-0.0001), "negative")