function diffMaxMin(arr) {
	var max =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] >max){
            max = arr[i]
        }
    }
    var min = max;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }
    
    return max-min
}

console.log(diffMaxMin([10, 4, 1, 2, 8, 91]), 90)
console.log(diffMaxMin([-70, 43, 34, 54, 22]), 124)