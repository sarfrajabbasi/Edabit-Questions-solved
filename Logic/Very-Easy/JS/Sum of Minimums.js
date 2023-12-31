function sumMinimums(arr) {
    var result = 0
    for(let i=0;i<arr.length;i++){
      result += Math.min(...arr[i])
    }
    return result
}

console.log(sumMinimums([[1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [20, 21, 34, 56, 100]]), 26) 
console.log(sumMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9)
console.log(sumMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76)
