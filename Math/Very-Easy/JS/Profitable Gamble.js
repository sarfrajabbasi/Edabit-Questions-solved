function profitableGamble(prob, prize, pay) {
	return (prob * prize) > pay
}

console.log(profitableGamble(0.2, 50, 9), true)
console.log(profitableGamble(0.9, 1, 2), false)
console.log(profitableGamble(0.9, 3, 2), true)
console.log(profitableGamble(0.33, 10, 3.30), true)
console.log(profitableGamble(0, 1000, 0.01), false)
console.log(profitableGamble(0.1, 1000, 7), true)
console.log(profitableGamble(0, 0, 0), false)