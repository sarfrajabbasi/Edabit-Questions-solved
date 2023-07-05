function sumDigits(n) {
	var count = 0;
    if(n>=1) ++count;

    while(n/10 >=1){
        n/=10;
        ++count;
    }
    return count


}

console.log(sumDigits(100), 3)
console.log(sumDigits(1000), 4)
console.log(sumDigits(12345), 5)
console.log(sumDigits(1000000000), 10)
console.log(sumDigits(145874589632), 12)
console.log(sumDigits(0), 1)
console.log(sumDigits(12345698745254856320), 20)
console.log(sumDigits(123456789), 9)
console.log(sumDigits(1234569874525485632012345698745254856320), 40)
console.log(sumDigits(1232458), 7)