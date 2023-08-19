function filterArray(arr) {
	return arr.filter((e)=> Number.isInteger(e))
}
function filterArray(arr){
    var newArr = [];
    for(let i=0;i<arr.length;i++){
        if(Number.isInteger(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(filterArray([1, 2, 3, "a", "b", 4]), [1, 2, 3, 4])
console.log(filterArray(["A", 1, "&amp", 0, -9, "Edabit"]), [1, 0, -9])
console.log(filterArray(["Nothing", "here"]),[])
console.log(filterArray([1, 2, 3, 3.5 , "a", "b", 4 , 5.8 , 6]), [1, 2, 3, 4 , 6])
