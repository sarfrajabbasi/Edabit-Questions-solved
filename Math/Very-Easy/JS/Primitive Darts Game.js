function dartsScoring(x, y) {
	var r = Math.sqrt((x**2)+(y**2));
    if(r>10){
        return 0 
    }else if(10>=r && r>5){
        return 1
    }else if(5>= r && r>1){
        return 5
    }else if(r<=1){
        return 10
    }
}


console.log(dartsScoring(-9, 9), 0)
console.log(dartsScoring(0, 10), 1)
console.log(dartsScoring(-5, 0), 5)
console.log(dartsScoring(0, -1), 10)
console.log(dartsScoring(0, 0), 10)
console.log(dartsScoring(-0.1, -0.1), 10)
console.log(dartsScoring(0.7, 0.7), 10)
console.log(dartsScoring(0.8, -0.8), 5)
console.log(dartsScoring(-3.5, 3.5), 5)
console.log(dartsScoring(-3.6, -3.6), 1)
console.log(dartsScoring(-7.0, 7.0), 1)
console.log(dartsScoring(7.1, -7.1), 0)
console.log(dartsScoring(0.5, -4), 5)