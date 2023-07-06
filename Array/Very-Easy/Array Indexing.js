function valueAt(arr, i) {
	var ind = Math.floor(i);
    return arr[ind] 
}

console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2), 6)
console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2), 4)
console.log(valueAt([1, 2], 1.0 / 2), 1)
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2), 5)