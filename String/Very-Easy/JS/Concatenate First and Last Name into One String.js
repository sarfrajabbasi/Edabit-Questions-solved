function concatName(firstName, lastName) {
	return `${lastName}, ${firstName}`
}

console.log(concatName("John", "Doe"), "Doe, John")
console.log(concatName("First", "Last"), "Last, First")
console.log(concatName("A", "B"), "B, A")

// In case someone is making odd assumptions about comma characters.
console.log(concatName(",", ","), ",, ,")