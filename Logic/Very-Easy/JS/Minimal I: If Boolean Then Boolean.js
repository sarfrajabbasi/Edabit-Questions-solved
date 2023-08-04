function isEven(n) {
	// return !Boolean(n%2);
	return !(n%2);
}

console.log(isEven(2), true)
console.log(isEven(3), false)
console.log(isEven(10), true)
console.log(isEven(31), false)
console.log(isEven(666), true)
console.log(isEven(777), false)
console.log(isEven(3482034), true)
console.log(isEven(3482035), false)