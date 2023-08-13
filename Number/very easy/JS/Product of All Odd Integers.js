function oddProduct(arr) {
	var sum = 1
    arr.forEach(e=> {
        if(e%2 ==1){
            sum *=e
        }
    })
    return sum
}

console.log(oddProduct([3, 4, 1, 1, 5]), 15)
console.log(oddProduct([5, 5, 8, 2, 4, 32]), 25)
console.log(oddProduct([1, 2, 1, 2, 1, 2, 1, 2]), 1)
console.log(oddProduct([0, 0, 0, 1]), 1)
console.log(oddProduct([1, 2, 2, 5, 2, 0]), 5)