function findIndex(arr, str) {
	return arr.indexOf(str)
}

console.log(findIndex(['abc', 'ghj', 'banana', 'grape'], 'grape'), 3)
console.log(findIndex(['a', 'b', 'c', 'd', 'e', 'f'], 'f'), 5)
console.log(findIndex(['hi', 'edabit.com', 'testcase', 'validstring'], 'edabit.com'), 1)