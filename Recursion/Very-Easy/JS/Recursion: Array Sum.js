function sum(arr,i=0) {
    // [] => 0
   if(arr.length==0){
    return 0
   }
   
// Else = iterate the array
    if(i=== arr.length-1){
        return arr[i];
    }
    return arr[i] + sum(arr,i+1)
 
}
function sum(arr,i) {
//    [] => 0
i ||=0
if(i == arr.length){
    return 0
}else{
    return arr[i] + sum(arr,i+1)
}
}

console.log(sum([1, 2, 3, 4]), 10)
console.log(sum([-1, -1, -1]), -3)
console.log(sum([1]), 1)
console.log(sum([]), 0)