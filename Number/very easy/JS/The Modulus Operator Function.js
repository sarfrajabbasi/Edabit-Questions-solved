function mod(a, b) {
	var q = Math.floor(a/b);
    var p = q*b
    
    var m = a-p
    return m
}

console.log(mod(0, 3), 0)
console.log(mod(1, 3), 1)
console.log(mod(5, 3), 2)
console.log(mod(4, 5), 4)
console.log(mod(218, 5), 3)