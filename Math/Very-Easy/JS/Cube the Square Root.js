function cubeSquareRoot(num) {
    //sqrt root:--
	//check the num is negative or non-numeric;
    if(num < 0 || Number.isNaN(num)){
        return NaN
    }
    //statring the calc. form half of the number.
    var squareRoot = num/2
    var temp = 0;
    //Iterating while square root is not equal to temp.
    while(squareRoot != temp){
        temp = squareRoot

        // smalling the square root value to find square root
        squareRoot = (num/squareRoot + squareRoot)/2;
    }


    return squareRoot**3;
}

console.log(cubeSquareRoot(81), 729)
console.log(cubeSquareRoot(1646089), 2111932187)
console.log(cubeSquareRoot(695556), 580093704)
