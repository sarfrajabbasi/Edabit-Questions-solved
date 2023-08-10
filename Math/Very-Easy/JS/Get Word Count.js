function countWords(str) {
	var wordsArr = str.split(" ")
    return wordsArr.length
}

console.log(countWords("It's high noon"), 3)
console.log(countWords("Is this easy mode"), 4)
console.log(countWords("What an easy task, right"), 5)
console.log(countWords("This is a test"), 4)
console.log(countWords("Just an example here move along"), 6)
console.log(countWords("How are you today?"), 4)