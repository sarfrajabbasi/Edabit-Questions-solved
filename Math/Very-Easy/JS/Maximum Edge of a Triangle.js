function nextEdge(side1, side2) {
	var sum;
    if(side1>side2){
        sum = (side1 +side2)-1
    }else{
        sum = (side2+side1)-1
    }
    return sum 
}

console.log(nextEdge(5, 4), 8)
console.log(nextEdge(8, 3), 10)
console.log(nextEdge(7, 9), 15)
console.log(nextEdge(10, 4), 13)
console.log(nextEdge(7, 2), 8)