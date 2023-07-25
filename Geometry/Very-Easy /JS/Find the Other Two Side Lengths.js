function otherSides(length) {
	var longestSide = length*2;
    var mediumlengthSide = length * Math.sqrt(3)
    mediumlengthSide = +(mediumlengthSide.toFixed(2));

    return [longestSide,mediumlengthSide]
}

console.log(otherSides(1), [2, 1.73])
console.log(otherSides(2), [4, 3.46])
console.log(otherSides(3), [6, 5.2])
console.log(otherSides(7), [14, 12.12])