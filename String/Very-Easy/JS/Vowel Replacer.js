function replaceVowels(str, ch) {
	return str.replaceAll(/[aeiou]/g,ch)
}

console.log(replaceVowels("the aardvark", "#"), "th# ##rdv#rk")
console.log(replaceVowels("minnie mouse", "?"), "m?nn?? m??s?")
console.log(replaceVowels("shakespeare", "*"), "sh*k*sp**r*")
console.log(replaceVowels("all is fair in love and war", "<"), "<ll <s f<<r <n l<v< <nd w<r")