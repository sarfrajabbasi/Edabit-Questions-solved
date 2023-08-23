function lastItem(input){
    for(let i=0;i<input.length;i++){
        return input[input.length-1]
    }
    
}

function lastItem(input){
    return input[input.length-1]
    
}
console.log(lastItem([0, 4, 19, 34, 50, -9, 2]), 2)
console.log(lastItem(["Hello", "There", "JavaScript", "User"]), "User")
console.log(lastItem([]), undefined)
console.log(lastItem([true, false, false, true]), true)
console.log(lastItem([(5, 0), (0, 5, 6, 7), (3, 5, 67, 7), (0, -9, 3, 45, 5)]), (0, -9, 3, 45, 5))
console.log(lastItem("JavaScript is a great programming langauge."), ".")
console.log(lastItem(["H", "E", "L", "L", "O"]), "O")
console.log(lastItem("The quick brown fox jumped over the lazy dog"), "g")
console.log(lastItem(""), undefined)