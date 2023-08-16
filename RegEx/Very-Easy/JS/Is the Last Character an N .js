function isLastCharacterN(word) {
	var regEx = new RegExp("n$","g");
    return regEx.test(word)
}
function isLastCharacterN(word) {
	
    return (/n$/g).test(word)
}

console.log(isLastCharacterN("Aiden"), true)
console.log(isLastCharacterN("Roxy"), false)
console.log(isLastCharacterN("Bert"), false)
console.log(isLastCharacterN("Dean"), true)
console.log(isLastCharacterN("Ian"), true)
console.log(isLastCharacterN("Brian"), true)
console.log(isLastCharacterN("Daniel"), false)