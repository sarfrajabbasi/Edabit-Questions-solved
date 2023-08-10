function findDigitAmount(num) {
	return `${num}`.length
}
console.log(findDigitAmount(1), 1, 'Should work with one digit')
console.log(findDigitAmount(67), 2, 'Should work with a two-digit number')
console.log(findDigitAmount(123), 3, 'Should work with a three-digit number')
console.log(findDigitAmount(55551), 5, 'Should work with a bit bigger number')
console.log(findDigitAmount(96456431), 8, 'Should work with bigger numbers')
console.log(findDigitAmount(0), 1, '0 should return 1, as it is a digit')