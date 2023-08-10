function squareAreasDifference(r) {
    var areaOfSmallerSqr = 2 * r ** 2  
    var areaOfbiggerSqr = 4 * r ** 2  
	return areaOfbiggerSqr-areaOfSmallerSqr
}

console.log(squareAreasDifference(5), 50)
console.log(squareAreasDifference(6), 72)
console.log(squareAreasDifference(7), 98)
console.log(squareAreasDifference(17), 578)