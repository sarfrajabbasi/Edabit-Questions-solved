function parity(n) {

	return !(n%2) ? "even" :"odd"
}

console.log(parity(2), 'even')
console.log(parity(3), 'odd')
console.log(parity(10), 'even')
console.log(parity(31), 'odd')
console.log(parity(666), 'even')
console.log(parity(777), 'odd')
console.log(parity(3482034), 'even')
console.log(parity(3482035), 'odd')