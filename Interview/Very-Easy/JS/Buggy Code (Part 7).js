function swap(a, b) {
	var [a,b] = [b,a]
	return [a, b]
}
console.log(swap(100, 200), [200, 100])
console.log(swap(44, 33), [33, 44])
console.log(swap(21, 12), [12, 21])
console.log(swap(10, 20), [20, 10])