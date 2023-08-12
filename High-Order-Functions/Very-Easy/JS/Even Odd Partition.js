function evenOddPartition(arr) {
	let evenArr =[] 
	let oddArr = [];
    let newArr = []
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            evenArr.push(arr[i])
        }else{
            oddArr.push(arr[i])
        }
    }
    
    newArr.push(evenArr,oddArr)

    return newArr
}
function evenOddPartition(arr){
    let evenArr =[] ,oddArr = [],newArr = [];
    for(let i=0;i<arr.length;i++){
       (arr[i]%2==0)? evenArr.push(arr[i]): oddArr.push(arr[i])
    }
    
    newArr.push(evenArr,oddArr)

    return newArr
}

console.log(evenOddPartition([5, 8, 9, 2, 0]), [[8, 2, 0], [5, 9]])
console.log(evenOddPartition([1, 0, 1, 0, 1, 0]), [[0, 0, 0], [1, 1, 1]])
console.log(evenOddPartition([8, 8, 4, 2]), [[8, 8, 4, 2], []])
console.log(evenOddPartition([1, 3, 5, 7, 9]), [[], [1, 3, 5, 7, 9]])
console.log(evenOddPartition([]), [[], []])