function howManyTimes(num) {
	var str = "Ed";
    for(let i=1;i<=num;i++){
        str+= "a" 
    }
    return str + "bit"
}

console.log(howManyTimes(5), "Edaaaaabit")
console.log(howManyTimes(15), "Edaaaaaaaaaaaaaaabit")
console.log(howManyTimes(10), "Edaaaaaaaaaabit")
console.log(howManyTimes(23), "Edaaaaaaaaaaaaaaaaaaaaaaabit")
console.log(howManyTimes(1), "Edabit")