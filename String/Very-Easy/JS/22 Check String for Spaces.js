function hasSpaces(str) {
	return (/^\s+$/).test(str)
}

console.log(hasSpaces("Foo"), false)
console.log(hasSpaces("Foo bar"), true)
console.log(hasSpaces("Foo "), true)
console.log(hasSpaces(" Foo"), true)
console.log(hasSpaces(" "), true)
console.log(hasSpaces(""), false)
console.log(hasSpaces(",./;'[]-="), false)