function limitNumber(num, rangeLow, rangeHigh) {
    return (num >rangeLow)? (num <rangeHigh)? num : rangeHigh: rangeLow
}

console.log(limitNumber(5, 1, 10), 5)
console.log(limitNumber(-3, 1, 10), 1)
console.log(limitNumber(14, 1, 10), 10)
console.log(limitNumber(4.6, 1, 10), 4.6)
console.log(limitNumber(-100, -73, -70), -73)
console.log(limitNumber(2, -73, -70), -70)
console.log(limitNumber(-71.5, -73, -70), -71.5)
console.log(limitNumber(7, 8, 8.1), 8)
console.log(limitNumber(9, 8, 8.1), 8.1)
console.log(limitNumber(8.05, 8, 8.1), 8.05)
console.log(limitNumber(16, 16, 16), 16)
console.log(limitNumber(-1, 16, 16), 16)
console.log(limitNumber(800, 16, 16), 16)