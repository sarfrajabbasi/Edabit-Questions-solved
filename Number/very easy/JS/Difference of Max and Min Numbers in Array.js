function diffMaxMin(arr) {
	var newAr = arr.sort((a,b)=> a-b)
    return Math.abs(newAr[0]-newAr[newAr.length-1])
}

console.log(diffMaxMin([10, 4, 1, 2, 8, 91]), 90)
console.log(diffMaxMin([-70, 43, 34, 54, 22]), 124)
