function getCase(str) {
	return (str.toUpperCase() == str)? "upper":(str.toLowerCase()==str)? "lower":"mixed"
}

console.log(getCase("whisper..."), "lower")
console.log(getCase("SHOUT!"), "upper")
console.log(getCase("Indoor Voice"), "mixed")
console.log(getCase("324324Indoor66453546Voice434"), "mixed")
console.log(getCase("!!!!SHOUT!!!!"), "upper")
console.log(getCase("......313whisper2131232..."), "lower")