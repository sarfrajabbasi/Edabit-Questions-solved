function FizzBuzz(num) {
    var val ;
	if(num%3==0 && num%5==0){
        val = "FizzBuzz" 
    }else if(num%5==0){
        val = "Buzz"
    }else if(num%3==0){
        val = "Fizz"
    }else{
        val =  num
    }
    return val
}

console.log(FizzBuzz(3), "Fizz", "You gave " + FizzBuzz(3) + " and Fizz was needed")
console.log(FizzBuzz(5), "Buzz", "You gave " + FizzBuzz(5) + " and Buzz was needed")
console.log(FizzBuzz(15), "FizzBuzz", "You gave " + FizzBuzz(15) + " and FizzBuzz was needed")
console.log(FizzBuzz(10), "Buzz", "You gave " + FizzBuzz(10) + " and Buzz was needed")
console.log(FizzBuzz(98), "98", "You gave " + FizzBuzz(98) + " and 98 was needed")