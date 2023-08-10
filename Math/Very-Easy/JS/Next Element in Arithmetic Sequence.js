function nextElement(arr) {
    var nextElement;
	var diff =arr[1]-arr[0]
    for(let i=0;i<arr.length;i++){
        if(i == arr.length-1){
            nextElement = arr[i]+diff
        }
    }
    return nextElement;
}
console.log(nextElement([3, 5, 7, 9]), 11) 
console.log(nextElement([-5, -6, -7]), -8) 
console.log(nextElement([2, 2, 2, 2, 2]), 2)