function shouldServeDrinks(age, onBreak) {
	return age >=18 && !onBreak
}

console.log(shouldServeDrinks(17, true), false)
console.log(shouldServeDrinks(30, true), false)
console.log(shouldServeDrinks(24, false), true)
console.log(shouldServeDrinks(18, false), true)
console.log(shouldServeDrinks(3, false), false)