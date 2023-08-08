function negate(arr) {
	var negateElement =[];
    for(let i=0;i<arr.length;i++){
        negateElement.push(-arr[i])

    }
    return negateElement
}

console.log(negate([1, 2, 3, 4]), [-1, -2, -3, -4])
console.log(negate([-1, -2, -3, -4]), [1, 2, 3, 4])
console.log(negate([]), [])