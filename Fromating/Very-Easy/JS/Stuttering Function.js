function stutter(word) {
	return `${(word.substring(0,2)+ "...").repeat(2)} ${word}`
}

console.log(stutter("incredible"), "in... in... incredible?")
console.log(stutter("am"), "am... am... am?")
console.log(stutter("outstanding"), "ou... ou... outstanding?")