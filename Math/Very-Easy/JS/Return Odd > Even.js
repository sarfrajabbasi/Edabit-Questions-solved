function oddeven(arr) {
    var count = 0
    var count2 =0
    if(arr.length <2){
       return arr[0]%2 !=0
    }
	for(let i=0;i<arr.length;i++){
        if(arr[i]%2 ==1){
            count++
        }else{
            count2++
        }
    }
    
    return (count>count2)
}

console.log(oddeven([1, 2, 3, 4, 5, 6, 7, 8, 9]), true)
console.log(oddeven([1]), true)
console.log(oddeven([1, 2, 3, 4, 5, 6, 7, 9]), true)
console.log(oddeven([42, 1, 66]), false)
console.log(oddeven([2, 3, 4, 5, 6, 7, 8]), false)
console.log(oddeven([43264573658142353463158]), false)