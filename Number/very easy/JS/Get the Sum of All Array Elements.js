function getSumOfItems(arr) {
	var sum = 0;
    arr.forEach(e=>{
        sum+=e
    })
    return sum
}
console.log(getSumOfItems([2, 7, 4]), 13)
console.log(getSumOfItems([45, 3, 0]), 48)
console.log(getSumOfItems([-2, 84, 23]), 105)

