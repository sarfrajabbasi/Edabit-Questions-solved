function invertArray(arr) {
	var newArr = [];
    for(let i=0;i<arr.length;i++){
       (arr[i] !=0)? newArr.push(arr[i]*-1):newArr.push(arr[i]);
    }
    return newArr
}

console.log(invertArray([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5])
console.log(invertArray([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5])
console.log(invertArray([]), [])
console.log(invertArray([0]), [0])
