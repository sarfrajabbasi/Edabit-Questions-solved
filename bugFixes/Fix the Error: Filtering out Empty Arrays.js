// Fix this incorrect code so that all tests pass!
function removeEmptyArrays(arr) {
	return arr.filter(x => !Array.isArray(x))
}


console.log(removeEmptyArrays(['a', 'b', []]), ['a', 'b'])
console.log(removeEmptyArrays([1, 2, [], 4]), [1, 2, 4])
console.log(removeEmptyArrays([[], [], [], []]), [])
console.log(removeEmptyArrays([1, 2, 3, 4]), [1, 2, 3, 4])
console.log(removeEmptyArrays([1, [], [], 4]), [1, 4])