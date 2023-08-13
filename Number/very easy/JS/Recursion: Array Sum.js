function sum(arr,n=arr.length) {
    
	if(n <=0){
        return 0
    }
    return sum(arr,n-1) + arr[n-1]
}

console.log(sum([1, 2, 3, 4]), 10)
console.log(sum([-1, -1, -1]), -3)
console.log(sum([1]), 1)
console.log(sum([]), 0)