function addUpTo(n) {
	var sum = 0
    for(let i=0;i<=n;i++){
        sum += i
    }
    return sum
}


console.log(addUpTo(3), 6, "Example #1")
console.log(addUpTo(10), 55, "Example #2")
console.log(addUpTo(0), 0)
console.log(addUpTo(2), 3)
console.log(addUpTo(20), 210)
console.log(addUpTo(1), 1)
