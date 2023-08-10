function automorphic(n) {
	// return String(Math.pow(n,2)).slice(-String(n).length)==n
	return String(Math.pow(n,2)).endsWith(n)
}

console.log(automorphic(1), true)
console.log(automorphic(3), false)
console.log(automorphic(6), true)
console.log(automorphic(9), false)
console.log(automorphic(10), false)
console.log(automorphic(25), true)
console.log(automorphic(53), false)
console.log(automorphic(76), true)
console.log(automorphic(95), false)
console.log(automorphic(100), false)
console.log(automorphic(625), true)
console.log(automorphic(225), false)