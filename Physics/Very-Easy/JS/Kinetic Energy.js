function kineticEnergy(m, v) {
	var KE = (m * (v**2))/2;
    return Math.round(KE)
}

console.log(kineticEnergy(60, 3), 270)
console.log(kineticEnergy(45, 10), 2250)
console.log(kineticEnergy(63.5, 7.35), 1715)
console.log(kineticEnergy(0, 7.35), 0)
console.log(kineticEnergy(88.4, 0), 0)
console.log(kineticEnergy(3.333, 5.4), 49)