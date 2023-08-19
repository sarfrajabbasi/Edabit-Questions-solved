function removeFirstLast(str) {
	if(str.length<=2){
        return str
    }
    return str.slice(1,str.length-1)
}

console.log(removeFirstLast("hello"), "ell")
console.log(removeFirstLast("benefit"), "enefi")
console.log(removeFirstLast("wordy"), "ord")
console.log(removeFirstLast("maybe"), "ayb")
console.log(removeFirstLast("to"), "to")
console.log(removeFirstLast("a"), "a")
console.log(removeFirstLast(""), "")