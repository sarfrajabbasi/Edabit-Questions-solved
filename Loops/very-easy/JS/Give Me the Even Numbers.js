function sumEvenNumsInRange(start, stop) {
    var sum = 0;
	for(let i=start;i<=stop;i++){
        if(i%2==0){
            sum += i
        }
    }
    return sum;
}

console.log(sumEvenNumsInRange(51, 150), 5050)
console.log(sumEvenNumsInRange(70, 100), 1360)
console.log(sumEvenNumsInRange(99, 110), 630)
console.log(sumEvenNumsInRange(63, 97), 1360)
console.log(sumEvenNumsInRange(10, 20), 90)