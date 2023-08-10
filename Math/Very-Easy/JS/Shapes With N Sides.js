function nSidedShape(n) {
    var outputs;
	switch (n) {
        case 1:
            outputs = "circle"
            break;
        case 2:
            outputs = "semi-circle"
            break;
        case 3:
            outputs = "triangle"
            break;
        case 4:
            outputs = "square"
            break;
        case 5:
            outputs = "pentagon"
            break;
        case 6:
            outputs = "hexagon"
            break;
        case 7:
            outputs = "heptagon"
            break;
        case 8:
            outputs = "octagon"
            break;
        case 9:
            outputs = "nonagon"
            break;
        case 10:
            outputs = "decagon"
            break;
    
        default:"invalid number"
            break;
    }
    return outputs;
}

console.log(nSidedShape(1), "circle")
console.log(nSidedShape(2), "semi-circle")
console.log(nSidedShape(3), "triangle")
console.log(nSidedShape(4), "square")
console.log(nSidedShape(5), "pentagon")
console.log(nSidedShape(6), "hexagon")
console.log(nSidedShape(7), "heptagon")
console.log(nSidedShape(8), "octagon")
console.log(nSidedShape(9), "nonagon")
console.log(nSidedShape(10), "decagon")