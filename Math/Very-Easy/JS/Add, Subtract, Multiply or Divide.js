function operation(num1, num2) {
	if(num1+ num2 == 24){
        return "added"
    }else if(num1-num2 == 24){
        return "subtracted"
    }else if(num1 * num2 ==24){
        return "multiplied"
    }else if(num1/num2 == 24){
        return "divided"
    }else{
        return null
    }
}

console.log(operation(12, 12), "added")
console.log(operation(100, 76), "subtracted")
console.log(operation(6, 4), "multiplied")
console.log(operation(528, 22), "divided")
console.log(operation(10, 12), null)