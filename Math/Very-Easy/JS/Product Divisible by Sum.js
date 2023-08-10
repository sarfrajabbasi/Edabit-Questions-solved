function divisible(arr) {
	var product = 1,sum = 0
    for(let i=0;i<arr.length;i++){
         product *= arr[i] 
         sum += arr[i]
    }
    return product%sum ==0;
}

console.log(divisible([3, 2, 4, 1]), false)
console.log(divisible([4, 4, 4, 4]), true)
console.log(divisible([4, 2, 6]), true)
console.log(divisible([1, 1, 1, 1, 10]), false)
console.log(divisible([10, 5, 10]), true)
console.log(divisible([3, 5, 1]), false)