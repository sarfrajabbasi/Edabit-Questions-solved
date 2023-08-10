function programmers(one, two, three) {
	var max = 0;
    var min = 0;
    for(let i=0;i<arguments.length;i++){
        if(arguments[i]>max){
            max  = arguments[i]
        }
    }
     min = max;

    for(let i=0;i<arguments.length;i++){
        if(arguments[i]<min){
            min = arguments[i]
        }
    }
    return max-min
}

console.log(programmers(1,   5,   9),   8)
console.log(programmers(43,  33,  43),  10)
console.log(programmers(88,  14,  23),  74)
console.log(programmers(33,  72,  74),  41)
console.log(programmers(147, 33,  526), 493)
console.log(programmers(234, 345, 457), 223)