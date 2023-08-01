function moveZeros(arr) {
	var newArr = [],zeroArr=[]
    for(let i=0;i<arr.length;i++){
        (arr[i]>0)? newArr.push(arr[i]):zeroArr.push(arr[i])
        
    }
    return newArr.concat(zeroArr)
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1,2,1,1,3,1,0,0,0,0])
console.log(moveZeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9]), [9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0])
console.log(moveZeros(["a",0,0,"b","c","d",0,1,0,1,0,3,0,1,9,0,0,0,0,9]), ["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0])
console.log(moveZeros(["a",0,0,"b",null,"c","d",0,1,false,0,1,0,3,[],0,1,9,0,0,0,0,9]), ["a","b",null,"c","d",1,false,1,3,[],1,9,9,0,0,0,0,0,0,0,0,0,0])
console.log(moveZeros([0,1,null,2,false,1,0]), [1,null,2,false,1,0,0])
console.log(moveZeros(["a","b"]), ["a","b"])
console.log(moveZeros(["a"]), ["a"])
console.log(moveZeros([0,0]), [0,0])
console.log(moveZeros([0]), [0])
console.log(moveZeros([false]), [false])
console.log(moveZeros([]), [])
