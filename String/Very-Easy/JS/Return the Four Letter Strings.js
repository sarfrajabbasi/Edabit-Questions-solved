function isFourLetters(arr) {
	var newArr =[];
    for(let str of arr){
        if(str.length==4){
            newArr.push(str)
        }
    }
    return newArr
}

console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]), ["Ryan", "Matt"])
console.log(isFourLetters(["Tomato", "Potato", "Pair"]), ["Pair"])
console.log(isFourLetters(["Kangaroo", "Bear", "Fox"]), ["Bear"])
console.log(isFourLetters(["Red", "Blue", "Green", "Pink"]), ["Blue", "Pink"])
console.log(isFourLetters(["is", "up", "two", "elephant"]), [])
console.log(isFourLetters([]), [])
console.log(isFourLetters(["jazz", "quiz", "jump"]), ["jazz", "quiz", "jump"])
console.log(isFourLetters([""]), [])
console.log(isFourLetters(["Broccoli", "Carrot", "Spinach"]), [])