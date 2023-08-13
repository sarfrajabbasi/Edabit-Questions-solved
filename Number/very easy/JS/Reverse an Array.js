function reverse(arr) {
	let newArr = [];
    for(let i=arr.length-1;i>=0;i--){
        newArr.push(arr[i])
        
    }
    return newArr
}

console.log(reverse([1, 2, 3, 4]), [4, 3, 2, 1])
console.log(reverse([5, 6, 7]), [7, 6, 5])
console.log(reverse([9, 9, 2, 3, 4]), [4, 3, 2, 9, 9])
console.log(reverse([3, 3]), [3, 3])
console.log(reverse([-1, -1, -1]), [-1, -1, -1])
console.log(reverse([]), [])