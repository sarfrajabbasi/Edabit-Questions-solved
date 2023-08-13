function sum(n) {
	if(n>1){
        return n+sum(n-1)
    }
    return n
}

console.log(sum(1), 1)
console.log(sum(5), 15)
console.log(sum(7), 28)
console.log(sum(10), 55)
console.log(sum(12), 78)
console.log(sum(15), 120)
console.log(sum(20), 210)
console.log(sum(100), 5050)