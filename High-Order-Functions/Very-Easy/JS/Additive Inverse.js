function additiveInverse(arr) {
	let newArr = [];
    let multiByMinusOne = e => e*-1 
    for(let i=0;i<arr.length;i++){
        newArr.push(multiByMinusOne(arr[i]))
    }
    return newArr
}

console.log(additiveInverse([5, -7, 8, 3]), [-5, 7, -8, -3])
console.log(additiveInverse([1, 1, 1, 1, 1]), [-1, -1, -1, -1, -1])
console.log(additiveInverse([-5, -25, 35]), [5, 25, -35])