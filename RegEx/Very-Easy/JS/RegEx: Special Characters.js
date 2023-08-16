function asterisk(string) {
	return (/^a\w+c/g).test(string)
}

console.log(asterisk("abccount"), true)
console.log(asterisk("abbbcount"), true)
console.log(asterisk("account"), true)
console.log(asterisk("bbbccount"), false)
console.log(asterisk("ccount"), false)
console.log(asterisk("abbount"), false)