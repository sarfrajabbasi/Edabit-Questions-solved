function areaShape(base, height, shape) {
	if(shape == "triangle"){
        return (0.5 * base) *height
    }
    return base*height
}

console.log(areaShape(2, 3, "triangle"), 3)
console.log(areaShape(8, 6, "parallelogram"), 48)
console.log(areaShape(0, 1, "triangle"), 0)
console.log(areaShape(2.9, 1.3, "parallelogram"), 3.77)
console.log(areaShape(0.01, 5, "triangle"), 0.025)