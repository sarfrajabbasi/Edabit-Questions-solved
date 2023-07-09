// Fix this incorrect code, so that all tests pass!
function minusOne(arr) {
    var newArr = [...arr]
	newArr.pop()
  return newArr
}

x = [1, 2, 3, 4, 5]
console.log(minusOne(x), [1, 2, 3, 4])
console.log(minusOne(x), [1, 2, 3, 4])
console.log(minusOne(x), [1, 2, 3, 4])
console.log(minusOne(x), [1, 2, 3, 4])
console.log(minusOne(x), [1, 2, 3, 4])