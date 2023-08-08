function binaryToDecimal(binary) {
    binary = binary.reverse()
    var  decimal = 0;
	for(let i=0;i<binary.length;i++){
        decimal+= binary[i]*(2**i);
    }
    return decimal
}
function binaryToDecimal(binary){
    var bin =  binary.join("")
    return parseInt(bin,2)
}

console.log(binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 1]), 255)
console.log(binaryToDecimal([0, 0, 0, 0, 0, 0, 0, 0]), 0)
console.log(binaryToDecimal([1, 0, 1, 1, 1, 1, 0, 0]), 188)
console.log(binaryToDecimal([1, 0, 1, 1, 0, 1, 0, 1]), 181)