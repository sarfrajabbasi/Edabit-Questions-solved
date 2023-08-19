function checkEnding(str1, str2) {
	return str1.endsWith(str2)
}

console.log(checkEnding("abc", "bc"), true)
console.log(checkEnding("abc", "d"), false)
console.log(checkEnding("samurai", "zi"), false)
console.log(checkEnding("feminine", "nine"), true)
console.log(checkEnding("convention", "tio"), false)
console.log(checkEnding("cooperative", "ooper"), false)
console.log(checkEnding("extraterrestrial", "xtraterrestrial"), true)
console.log(checkEnding("access", "ss"), true)
console.log(checkEnding("motorist", "is"), false)
console.log(checkEnding("landowner", "landowner"), true)