function trimmedAverages(arr) {
	var newArr = arr.sort((a,b)=>a-b)
    var sum = 0
    newArr.pop();
    newArr.shift()
    newArr.forEach(e=>{
         sum +=e
    })
    return Math.round(sum/newArr.length)
}
console.log(trimmedAverages([4, 5, 7, 100]), 6)
console.log(trimmedAverages([10, 25, 5, 15, 20]), 15)
console.log(trimmedAverages([1, 1, 1]), 1)
console.log(trimmedAverages([14, 8, 8]), 8)
console.log(trimmedAverages([18, 19, 13]), 18)
console.log(trimmedAverages([18, 16, 20, 18, 3]), 17)
console.log(trimmedAverages([10, 15, 15, 11]), 13)
console.log(trimmedAverages([4, 12, 4, 17, 11]), 9)
console.log(trimmedAverages([9, 1, 11, 8, 15, 20, 5]), 10)
console.log(trimmedAverages([13, 10, 13, 6]), 12)
