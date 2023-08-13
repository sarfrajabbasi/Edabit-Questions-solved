function convertCartesian(x, y) {
	var newArr = [];
    for(let i=0;i<x.length;i++){
        newArr.push([x[i],y[i]])
    }
    return newArr
}


console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]), [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]])
console.log(convertCartesian([9, 8, 3], [1, 1, 1]), [[9, 1], [8, 1], [3, 1]])
console.log(convertCartesian([2, 5, 1], [7, 8, 9]), [[2, 7], [5, 8], [1, 9]])
console.log(convertCartesian([3, 2, 2], [6, 1, 7]), [[3, 6], [2, 1], [2, 7]])