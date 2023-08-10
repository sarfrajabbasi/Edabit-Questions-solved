function animals(chickens, cows, pigs) {
	var totalNumberOfLegs = (chickens *2) + (cows * 4) + (pigs * 4);
    return totalNumberOfLegs;
}
console.log(animals(5, 2, 8), 50)
console.log(animals(3, 4, 7), 50)
console.log(animals(1, 2, 3), 22)
console.log(animals(3, 5, 2), 34)