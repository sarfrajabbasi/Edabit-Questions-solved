function forbiddenLetter(char, arr) {
	for(let i=0;i<arr.length;i++){
        if(arr[i].includes(char)){
            return false
        }
    }
    return true
}

console.log(forbiddenLetter('e', ['rinse', 'and', 'repeat']), false)
console.log(forbiddenLetter('d', ['python', 'javascript', 'ruby', 'fortran']), true)
console.log(forbiddenLetter('a', ['spoon', 'fork', 'knife']), true)
console.log(forbiddenLetter('b', ['test', 'dot', 'assert', 'equals']), true)
console.log(forbiddenLetter('i', ['rock', 'paper', 'scissors']), false)
console.log(forbiddenLetter('t', []), true)
