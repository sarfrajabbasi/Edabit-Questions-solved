function negate(arr) {
	return arr.map(e=> e*-1)
}
console.log(negate([1, 2, 3, 4]), [-1, -2, -3, -4])
console.log(negate([-1, -2, -3, -4]), [1, 2, 3, 4])
console.log(negate([]), [])