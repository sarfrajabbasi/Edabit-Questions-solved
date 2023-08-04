function notShare(arr1, arr2) {
    var bool = true
    for (let i of arr1) {
        if(arr2.includes(i)){
            bool = false
        }
    }
    return bool
}
  console.log(notShare([1, 2, 3], [4, 5, 6]), true)
  console.log(notShare([1, 2, 3], [3, 4, 5]), false)
  console.log(notShare([3, 3, 3], [4, 5, 6]), true)
  console.log(notShare([3, 3, 3], [1, 2, 3]), false)
  console.log(notShare([1, 2, 3, 4, 5, 6], [7]), true)
  console.log(notShare([1, 2, 3, 4, 5, 6], [6]), false)
  console.log(notShare([1], [2, 3, 4, 5, 6, 7]), true)
  console.log(notShare([1], [1, 2, 3, 4, 5, 6]), false)
  

