function mdFormat(word, style) {
	return (style == "b")? `**${word}**`:(style == "i")? `_${word}_`:(style == "c")? `${"`" + word + "`"} `:(style == "s")? `~~${word}~~` : ""
}

console.log(mdFormat("Bold", "b"), "**Bold**")
console.log(mdFormat("Italics", "i"), "_Italics_")
console.log(mdFormat("Code", "c"), "`Code`")
console.log(mdFormat("Ruby", "s"), "~~Ruby~~")
console.log(mdFormat("JavaScript", "b"), "**JavaScript**")
console.log(mdFormat("Python", "i"), "_Python_")
console.log(mdFormat("C++", "c"), "`C++`")
console.log(mdFormat("Strikethrough", "s"), "~~Strikethrough~~")