function imposterFormula(i, p) {
	var chancesOfImposter = 100*(i/p);
    return Math.round(chancesOfImposter) + "%"
}

console.log(imposterFormula(1, 9), "11%")
console.log(imposterFormula(2, 10), "20%")
console.log(imposterFormula(3, 7), "43%")