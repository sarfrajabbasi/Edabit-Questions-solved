function area(h, w) {
	if(w <= 0 || h <= 0){
        return -1
    }else{
        return h * w
    }
}

console.log(area(5, 3), 15)
console.log(area(8, 5), 40)
console.log(area(5, 4), 20)
console.log(area(2, 3), 6)
console.log(area(10000, 10000), 100000000)
console.log(area(-2, -5), -1)
console.log(area(0, 3), -1)
console.log(area(5, -3), -1)
console.log(area(0, 1), -1)
console.log(area(-1, 0), -1)