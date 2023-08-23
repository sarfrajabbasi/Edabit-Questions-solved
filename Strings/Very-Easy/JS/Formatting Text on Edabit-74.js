function mdFormat(word,style){
    if(style ==="b"){
        return word = `**${word}**`;
    }else if(style ==="i"){
        return word = `_${word}_`;
    }else if(style ==="c"){
        return word = "`"+`${word}` + "`";
    }else if(style ==="s"){
        return word = `~~${word}~~`;
    }else{
        throw new Error("bhaiii kyaa kr rha a tuu??")
    }
}

console.log(mdFormat("Bold", "b"), "**Bold**")
console.log(mdFormat("Italics", "i"), "_Italics_")
console.log(mdFormat("Code", "c"), "`Code`")
console.log(mdFormat("Ruby", "s"), "~~Ruby~~")
console.log(mdFormat("JavaScript", "b"), "**JavaScript**")
console.log(mdFormat("Python", "i"), "_Python_")
console.log(mdFormat("C++", "c"), "`C++`")
console.log(mdFormat("Strikethrough", "s"), "~~Strikethrough~~")