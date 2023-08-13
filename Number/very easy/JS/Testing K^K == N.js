function kToK(n, k) {
	return k**k ==n
}

console.log(kToK(4, 2), true)
console.log(kToK(387420489, 9), true)
console.log(kToK(302875106592253, 13), true)

console.log(kToK(3124, 5), false)
console.log(kToK(17, 3), false)
console.log(kToK(823544, 7), false)