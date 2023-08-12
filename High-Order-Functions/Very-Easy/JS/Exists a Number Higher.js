function existsHigher(arr, n) {
    let garterThen = (e,num) => e >= num
    for(let i=0;i<arr.length;i++){
        if(garterThen(arr[i],n)){
            return true
        }
    }
    return false
}

console.log(existsHigher([5, 3, 15, 22, 4], 10), true)
console.log(existsHigher([1, 2, 3, 4, 5], 8), false)
console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4), true)
console.log(existsHigher([2, 2, 2, 2], 5), false)
console.log(existsHigher([], 0), false)