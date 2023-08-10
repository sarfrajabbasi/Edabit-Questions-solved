function sum(n) {
    var result = 1;
    var count;
    for (count = n; count > 1; count--) {
      result += count;
    }
    return result;
}

console.log(sum(1), 1)
console.log(sum(5), 15)
console.log(sum(7), 28)
console.log(sum(10), 55)
console.log(sum(12), 78)
console.log(sum(15), 120)
console.log(sum(20), 210)
console.log(sum(100), 5050)