function isStrangePair(str1, str2) {
	return str1[0] == str2[str2.length-1]
}
console.log(isStrangePair("ratio", "orator"), true)
console.log(isStrangePair("sparkling", "groups"), true)
console.log(isStrangePair("mentee", "eminem"), true)
console.log(isStrangePair("yahtzee", "easy"), true)
console.log(isStrangePair("bush", "hubris"), false)

console.log(isStrangePair("edit", "cheese"), false)
console.log(isStrangePair("false", "true"), false)
console.log(isStrangePair("cupid", "dionysus"), false)
console.log(isStrangePair("futile", "elephant"), false)
console.log(isStrangePair("", ""), true)
console.log(isStrangePair("", "abc"), false)
console.log(isStrangePair("a", "a"), true)
console.log(isStrangePair("a", "b"), false)
console.log(isStrangePair("&", "&"), true)
console.log(isStrangePair("&!", "!&"), true)
console.log(isStrangePair("5556", "65"), true)