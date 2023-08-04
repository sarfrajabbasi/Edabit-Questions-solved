function evenLast(arr) {
	var num = 0;
    if(arr.length ==0){
        return 0
    }
    for(let i=0;i<arr.length;i++){
        if(i%2==0){
            num += arr[i] *arr[arr.length-1]
        }
    }
    return num
}

console.log(evenLast([2, 3, 4, 5]), 30)
console.log(evenLast([]), 0)
console.log(evenLast([2, 2, 2, 2]), 8)
console.log(evenLast([1, 3, 3, 1, 10]), 140)
console.log(evenLast([-11, 3, 3, 1, 10]), 20)