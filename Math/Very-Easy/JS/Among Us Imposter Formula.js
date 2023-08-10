function imposterFormula(i, p) {
	return Math.round(100*(i/p)) + "%"
}

console.log(imposterFormula(1, 9), "11%")
console.log(imposterFormula(2, 10), "20%")
console.log(imposterFormula(3, 7), "43%")