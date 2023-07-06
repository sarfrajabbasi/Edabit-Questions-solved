function drop(arr, val = 1) {
	var newArr = [];
    let  i =val;
    while(i<arr.length){
        newArr.push(arr[i])
        i++
    }

    return newArr
}

console.log(drop([1, 2, 3], 2), [3])
console.log(drop([1, 2, 3], 5), [])
console.log(drop([1, 2, 3], 0), [1, 2, 3])
console.log(drop(["banana", "orange", "watermelon", "mango"], 2), ["watermelon", "mango"])
console.log(drop([], 2), [])