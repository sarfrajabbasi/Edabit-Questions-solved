function evenLast(arr) {
	var sum =0;
   for(let i=0;i<arr.length;i++){
        (i%2==0)?sum+=arr[i]:null
   }
    return (arr.length!=0)? sum*arr[arr.length-1] :0
}
console.log(evenLast([2, 3, 4, 5]), 30)
console.log(evenLast([]), 0)
console.log(evenLast([2, 2, 2, 2]), 8)
console.log(evenLast([1, 3, 3, 1, 10]), 140)
console.log(evenLast([-11, 3, 3, 1, 10]), 20)
