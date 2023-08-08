function additiveInverse(arr) {
    var newArr = [];

for(let i=0;i<arr.length;i++){
newArr.push(-arr[i])
}
return newArr
}

console.log(additiveInverse([5, -7, 8, 3]), [-5, 7, -8, -3])
console.log(additiveInverse([1, 1, 1, 1, 1]), [-1, -1, -1, -1, -1])
console.log(additiveInverse([-5, -25, 35]), [5, 25, -35])