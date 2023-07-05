function makesTen(a, b) {
    var sum = a+b
	if(a== 10 || b== 10 || sum ==10){
        return true
    }
    return false
}

console.log(makesTen(9, 10), true)	
console.log(makesTen(9, 9), false)	
console.log(makesTen(1, 9), true)	
console.log(makesTen(10, 1), true)	
console.log(makesTen(10, 10), true)	
console.log(makesTen(8, 2), true)	
console.log(makesTen(8, 3), false)	
console.log(makesTen(10, 42), true)	
console.log(makesTen(12, -2), true)
// Author : serf