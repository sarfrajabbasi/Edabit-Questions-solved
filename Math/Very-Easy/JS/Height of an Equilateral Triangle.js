function height(side) {
	var heights = side* (Math.sqrt(3)/2)*10;
    return heights.toFixed(1) + " mm"
}

console.log(height(2), "17.3 mm")
console.log(height(5), "43.3 mm")
console.log(height(6.2), "53.7 mm")
console.log(height(8.7), "75.3 mm")
console.log(height(10), "86.6 mm")
console.log(height(13), "112.6 mm")
console.log(height(18.5), "160.2 mm")
