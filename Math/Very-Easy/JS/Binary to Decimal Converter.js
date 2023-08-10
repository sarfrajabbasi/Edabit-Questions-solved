function binaryToDecimal(binary) {
    var decimal =0
	var arr = binary.reverse();
    for(let i=0;i<arr.length;i++){
        decimal += arr[i]*Math.pow(2,i)
    }
    return decimal
}

console.log(binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 1]), 255)
console.log(binaryToDecimal([0, 0, 0, 0, 0, 0, 0, 0]), 0)
console.log(binaryToDecimal([1, 0, 1, 1, 1, 1, 0, 0]), 188)
console.log(binaryToDecimal([1, 0, 1, 1, 0, 1, 0, 1]), 181)