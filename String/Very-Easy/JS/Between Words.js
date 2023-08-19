function isBetween(first, last, word) {
  var arr = [first,last,word]
	return arr.sort()[1]==word
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