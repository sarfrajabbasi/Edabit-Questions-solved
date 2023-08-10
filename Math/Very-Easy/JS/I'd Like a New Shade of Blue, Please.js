function howManyWalls(n, w, h) {
    if(n/(w*h) <1){
        return 0
    }
	return Math.round(n/(w*h))
}

console.log(howManyWalls(100, 4, 5), 5)
console.log(howManyWalls(10, 15, 12), 0)
console.log(howManyWalls(41, 3, 6), 2)
console.log(howManyWalls(50, 11, 5), 0)
console.log(howManyWalls(1, 1, 1), 1)
