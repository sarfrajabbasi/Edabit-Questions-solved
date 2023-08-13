function randomInt(a, b) {
	var newArr =[];
    for(let i=a;i<=b;i++){
        newArr.push(i)
    }
    var item = newArr[Math.floor(Math.random()*newArr.length)]
    return item
}
const range = (start, stop, step = 1) =>
  Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);

console.log(Number.isInteger(randomInt(1,5)), true, 'Return value must be an integer')
console.log(range(1, 4).includes(randomInt(1, 3)), true, 'Your function should return a value N such that a <= N <= b')
console.log(range(3, 6).includes(randomInt(3, 5)), true, 'Your function should return a value N such that a <= N <= b')
console.log(range(1, 11).includes(randomInt(1, 10)), true, 'Your function should return a value N such that a <= N <= b')
console.log(range(20, 31).includes(randomInt(20, 30)), true, 'Your function should return a value N such that a <= N <= b')
console.log(range(50, 101).includes(randomInt(50, 100)), true, 'Your function should return a value N such that a <= N <= b')
console.log(randomInt(5, 5), 5, 'Your function should return a value N such that a <= N <= b')
console.log(randomInt(1, 100000), randomInt(1, 100000), 'Your function doesn\'t seem to generate random integers or you\'re the unluckiest person alive.')