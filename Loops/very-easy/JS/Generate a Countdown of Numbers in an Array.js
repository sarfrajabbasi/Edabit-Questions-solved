function countdown(start) {
	var newArr = [];
    for(let i=start;i>=0;i--){
        newArr.push(i)
    }
    return newArr
}

console.log(countdown(3), [3, 2, 1, 0])
console.log(countdown(20), [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
console.log(countdown(1), [1, 0])
console.log(countdown(0), [0])