function getSumOfItems(arr) {
	var sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum;
}

console.log(getSumOfItems([2, 7, 4]), 13)
console.log(getSumOfItems([45, 3, 0]), 48)
console.log(getSumOfItems([-2, 84, 23]), 105)
