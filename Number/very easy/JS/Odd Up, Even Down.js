function transform(arr) {
	var newArr = [];
    arr.forEach(e=>{
        if(e%2==0){
            e -=1
        }else{
            e+=1
        } 
        newArr.push(e)
    })
    return newArr
    
}

console.log(transform([1, 2, 3, 4, 5]), [2, 1, 4, 3, 6])
console.log(transform([3, 3, 4, 3]), [4, 4, 3, 4])
console.log(transform([2, 2, 0, 8, 10]), [1, 1, -1, 7, 9])
console.log(transform([9, 13, 15, 5, 2, 11]), [10, 14, 16, 6, 1, 12])