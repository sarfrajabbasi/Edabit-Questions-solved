function oddeven(arr) {
	var oddArr = arr.filter(e=>e%2==1);
	var evenArr = arr.filter(e=>e%2==0);
    return oddArr.length>evenArr.length
}
console.log(oddeven([1, 2, 3, 4, 5, 6, 7, 8, 9]), true)
console.log(oddeven([1]), true)
console.log(oddeven([1, 2, 3, 4, 5, 6, 7, 9]), true)
console.log(oddeven([42, 1, 66]), false)
console.log(oddeven([2, 3, 4, 5, 6, 7, 8]), false)
console.log(oddeven([43264573658142353463158]), false)