function isBetween(first,last,word){
    return word >first && word <last
}
function isBetween(first,last,word){
    return [...arguments].sort()[1]===word
}
function isBetween(first,last,word){
    return [first,last,word].sort().indexOf(word)==1
}
function isBetween(first,last,word){
    if(word>first && word <last){
        return true
    }
    return false
}
console.log(isBetween("apple", "banana", "azure"), true)
console.log(isBetween("bookcase", "zebra", "squid"), true)
console.log(isBetween("shrapnel", "tapenade", "tally"), true)
console.log(isBetween("monk", "monument", "monkey"), true)
console.log(isBetween("oath", "ostrich", "osteoporosis"), true)
console.log(isBetween("ostracize", "ostrich", "open"), false)
console.log(isBetween("bookend", "boolean", "boost"), false)
console.log(isBetween("tamer", "tanner", "timid"), false)
console.log(isBetween("rhino", "sorcerer", "quote"), false)
console.log(isBetween("body", "lung", "ace"), false)