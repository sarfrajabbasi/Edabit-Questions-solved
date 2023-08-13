function arrBetween(num1, num2, arr) {
	let newArr = [];
    for(let n of arr){
        if(n>num1 && n<num2){
            newArr.push(n)
        }
    }
    return newArr
}
console.log(arrBetween(7, 32, [1, 2, 3, 78]), [])
console.log(arrBetween(0, 9, [1, 2, 3, 78]), [1, 2, 3])
console.log(arrBetween(-5, 3, [-8, 0, 0, 20, -3]), [0, 0, -3])
console.log(arrBetween(1, 1, [1, 0, 3, 7]), [])
console.log(arrBetween(0, 310, [1, -2, 300, 78765, 100, 99, 98, 234]), [1, 300, 100, 99, 98, 234])