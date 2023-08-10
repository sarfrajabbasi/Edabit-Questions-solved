function kmtomiles(kilometers) {
    var miles = kilometers * 0.621371
	return +(miles.toFixed(5))
}

console.log(kmtomiles(2), 1.24274)
console.log(kmtomiles(6), 3.72823)
console.log(kmtomiles(8), 4.97097)