function eq(evaluate) {
	return eval(evaluate)
}

console.log(eq("1+2"), 3)
console.log(eq("6/(9-7)"), 3)
console.log(eq("3+2-4"), 1)
console.log(eq("3*4+1"), 13)
console.log(eq("5*8-4*9"), 4)
console.log(eq("3**7"), 2187)
console.log(eq("(6**3)+3"), 219)