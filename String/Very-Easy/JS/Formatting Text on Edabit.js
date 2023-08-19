function mdFormat(word, style) {
    var str ;
	switch (style) {
        case "b":
            str = `**${word}**`
            break;
            
        case "i":
            str = `__${word}__`
            break;
        case "c":
            str = "`" + word + "`"
            break;
        case "s":
            str = `~~${word}~~`
            break;
    
        default:"Invalid"
            break;
    }
    return str
}

console.log(mdFormat("Bold", "b"), "**Bold**")
console.log(mdFormat("Italics", "i"), "_Italics_")
console.log(mdFormat("Code", "c"), "`Code`")
console.log(mdFormat("Ruby", "s"), "~~Ruby~~")
console.log(mdFormat("JavaScript", "b"), "**JavaScript**")
console.log(mdFormat("Python", "i"), "_Python_")
console.log(mdFormat("C++", "c"), "`C++`")
console.log(mdFormat("Strikethrough", "s"), "~~Strikethrough~~")