function dartsScoring(x, y) {
	var intoPolarCo = Math.sqrt((x**2)+(y**2));
    var point ;
    // console.log(intoPolarCo);
    if(intoPolarCo>10){
        point = 0
    }else if(intoPolarCo>=10 || intoPolarCo>5){
        point = 1
    }else if(5>=intoPolarCo && intoPolarCo >1){
        point = 5
    }else if(intoPolarCo <=1){
        point = 10
    }
    return point
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
