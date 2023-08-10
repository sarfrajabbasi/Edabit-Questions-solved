function isEvenOrOdd(num) {
	if(num%2==0){
        return "even"
    }else{
        return "odd"
    }
}

console.log(isEvenOrOdd(3), "odd")
console.log(isEvenOrOdd(0), "even")
console.log(isEvenOrOdd(7), "odd")
console.log(isEvenOrOdd(12), "even")
console.log(isEvenOrOdd(6474), "even")
console.log(isEvenOrOdd(0563), "odd")
console.log(isEvenOrOdd(3), "odd")
console.log(isEvenOrOdd(0000001111100000), "even")
console.log(isEvenOrOdd(301), "odd")
console.log(isEvenOrOdd(-3), "odd")
console.log(isEvenOrOdd(-0), "even")
console.log(isEvenOrOdd(-7), "odd")
console.log(isEvenOrOdd(-12), "even")
console.log(isEvenOrOdd(-6474), "even")
console.log(isEvenOrOdd(-0563), "odd")
console.log(isEvenOrOdd(-3), "odd")
console.log(isEvenOrOdd(-0000001111100000), "even")
console.log(isEvenOrOdd(-301), "odd")