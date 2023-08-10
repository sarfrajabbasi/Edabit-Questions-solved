function totalCups(n) {
    var total = n + (n/6)
    return Math.floor(total)
}

console.log(totalCups(6), 7)
console.log(totalCups(3), 3)
console.log(totalCups(7), 8)
console.log(totalCups(12), 14)
console.log(totalCups(213), 248)
console.log(totalCups(16), 18)