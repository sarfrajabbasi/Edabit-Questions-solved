// reverse Array
// function invertArray(arr,i=0) {
// 	if(!arr.length)return arr;
//     return invertArray(arr.slice(1)).concat(arr[0])
// }
// invert array
function invertArray(arr){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            newArr.push(arr[i])
        }else{

            newArr.push(-arr[i])
        }
    }
    return newArr
}
console.log(invertArray([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5])
console.log(invertArray([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5])
console.log(invertArray([]), [])
console.log(invertArray([0]), [0])
