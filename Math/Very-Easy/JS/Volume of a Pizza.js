function volPizza(radius, height) {
	var volOfPizza = (radius*radius)*height * Math.PI;
    return Math.round(volOfPizza)
}

console.log(volPizza(1, 1), 3, "Example #1")
console.log(volPizza(7, 2), 308, "Example #2")
console.log(volPizza(10, 2.5), 785, "Example #3")
console.log(volPizza(15, 1.3), 919)
console.log(volPizza(20, 1), 1257)
console.log(volPizza(13, 2), 1062)