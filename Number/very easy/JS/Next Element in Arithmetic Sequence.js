function nextElement(arr) {
	var num  =  arr[arr.length-1] -arr[arr.length-2]
    return arr[arr.length-1]+num
   
}
console.log(nextElement([3, 5, 7, 9]), 11) 
console.log(nextElement([-5, -6, -7]), -8) 
console.log(nextElement([2, 2, 2, 2, 2]), 2)