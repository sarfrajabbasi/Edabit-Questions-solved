function nthSmallest(arr, n) {
	var newArr = arr.sort((a,b)=> a-b);
    for(let i=0;i<newArr.length;i++){
        if(n==i){
            return newArr[i-1]
        }
    }
    return null
}

console.log(nthSmallest([1, 3, 5, 7], 1), 1)
console.log(nthSmallest([1, 3, 5, 7], 3), 5)
console.log(nthSmallest([1, 3, 5, 7], 5), null)
console.log(nthSmallest([7, 3, 5, 1], 2), 3)
console.log(nthSmallest([5, 4, 3, 2, 1, -3], 1), -3)
console.log(nthSmallest([5, 4, 3, 2, 1, -3], 5), 4)
console.log(nthSmallest([4, 5], 3), null)
console.log(nthSmallest([4, 5], 2), 5)
console.log(nthSmallest([4, 5], 1), 4)