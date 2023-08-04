function isInOrder(str) {
	var arr = str.split("").sort().join("");
    return str == arr
}

console.log(isInOrder("abc"), true)
console.log(isInOrder("edabit"), false)
console.log(isInOrder("xyz"), true)
console.log(isInOrder("xyzz"), true)
console.log(isInOrder("123"), true)
console.log(isInOrder("321"), false)