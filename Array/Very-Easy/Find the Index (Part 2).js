function search(arr, item) {
	for(let i=0;i<arr.length;i++){
        if(arr[i] == item){
            return i
        }
    }
    return -1
}

console.log(search([1, 2, 3, 4], 3), 2)
console.log(search([2, 4, 6, 8, 10], 8), 3)
console.log(search([1, 3, 5, 7, 9], 11), -1)
console.log(search([1, 5, 7, 11, 25, 100, 200, 350], 5), 1)