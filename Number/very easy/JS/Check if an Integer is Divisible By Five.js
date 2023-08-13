function divisibleByFive(n) {
    var divBFive = false;
	if(n%5==0){
        divBFive = true
    }
    return divBFive
}

console.log(divisibleByFive(7), false)
console.log(divisibleByFive(5), true)
console.log(divisibleByFive(15), true)
console.log(divisibleByFive(33), false)
console.log(divisibleByFive(-18), false)
console.log(divisibleByFive(999), false)
console.log(divisibleByFive(2), false)