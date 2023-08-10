function equalSlices(total, people, each) {
	return (people * each) <=total;
}

console.log(equalSlices(8, 3, 2), true)
console.log(equalSlices(8, 3, 3), false)
console.log(equalSlices(24, 12, 2), true)
console.log(equalSlices(5, 6, 1), false)
console.log(equalSlices(5, 0, 100), true)
console.log(equalSlices(15, 2, 7), true)
console.log(equalSlices(15, 2, 8), false)