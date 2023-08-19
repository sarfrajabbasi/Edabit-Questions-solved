function oddOrEven(s) {
	return s.length%2==0
}

console.log(oddOrEven("apples"), true)
console.log(oddOrEven("banana"), true)
console.log(oddOrEven("cherry"), true)
console.log(oddOrEven("mango"), false)
console.log(oddOrEven("peach"), false)
console.log(oddOrEven("pears"), false)