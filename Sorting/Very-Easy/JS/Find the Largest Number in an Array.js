function findLargestNum(arr) {
	var max = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max= arr[i]
        }
    }
    return max
}

console.log(findLargestNum([4, 5, 1, 3]), 5)
console.log(findLargestNum([13, 27, 18, 26]), 27)
console.log(findLargestNum([32, 35, 37, 39]), 39)
console.log(findLargestNum([1000, 1001, 857, 1]), 1001)
console.log(findLargestNum([27364, 837363, 736736, 73635]), 837363)
console.log(findLargestNum([30, 2, 40, 3]), 40)
console.log(findLargestNum([0, 1, 0, 0, 1]), 1)