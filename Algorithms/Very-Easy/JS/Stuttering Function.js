function stutter(word) {
	var ellipsis =  word[0] +word[1];
    return  `${ellipsis}... ${ellipsis}... ${word}?`
}

console.log(stutter("incredible"), "in... in... incredible?")
console.log(stutter("am"), "am... am... am?")
console.log(stutter("outstanding"), "ou... ou... outstanding?")