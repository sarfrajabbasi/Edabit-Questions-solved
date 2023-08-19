function isLastCharacterN(word) {
	return word[word.length-1] == "n"
}
console.log(isLastCharacterN("Aiden"), true)
console.log(isLastCharacterN("Roxy"), false)
console.log(isLastCharacterN("Bert"), false)
console.log(isLastCharacterN("Dean"), true)
console.log(isLastCharacterN("Ian"), true)
console.log(isLastCharacterN("Brian"), true)
console.log(isLastCharacterN("Daniel"), false)