function binaryToDecimal(arr) {
var binary  = [] ;
var sumB = 0
for(let i=arr.length;i>=0;i--){
    if(arr[i] !== undefined){

        binary.push(arr[i])
    }
}
console.log(binary)
for(let i=0;i<binary.length;i++){
    sumB += binary[i]*(2**i)
}
return sumB
}

console.log(binaryToDecimal([0,0,0,1]), 1)
console.log(binaryToDecimal([0,0,1,0]), 2)
console.log(binaryToDecimal([1,1,1,1]), 15)
console.log(binaryToDecimal([0,1,1,0]), 6)
console.log(binaryToDecimal([1,0,1,0,1,1,1]), 87)
console.log(binaryToDecimal([1,1,1,1,1,0,1,1,0,1]), 1005)
console.log(binaryToDecimal([1,1,1,1,1,0,1,1,1,0,1]), 2013)