function filterDigitLength(arr, num) {
	var newArr = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i].toString().length==num){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(filterDigitLength([88, 232, 4, 9721, 555], 3), [232, 555])
console.log(filterDigitLength([2, 7, 8, 9, 1012], 1), [2, 7, 8, 9])
console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1), [], 'Should return empty array if no numbers of specified length exist.')
console.log(filterDigitLength([5, 6, 8, 9], 1), [5, 6, 8, 9], 'Should return original array if every digit is that length.')
console.log(filterDigitLength([99, 838, 435, 7666, 989, 431], 3), [838, 435, 989, 431])
console.log(filterDigitLength([99, 838, 435, 7666, 989, 431], 2), [99])