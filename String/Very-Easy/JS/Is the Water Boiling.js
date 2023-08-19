function isBoiling(temp) {
	if(temp[temp.length-1] == "F"){
        return Number(temp.slice(0,3))>=212
    }
    return Number(temp.slice(0,3))>=100
}

console.log(isBoiling("212F"), true)
console.log(isBoiling("100C"), true)
console.log(isBoiling("0F"), false)
console.log(isBoiling("-1F"), false)
console.log(isBoiling("213F"), true)
console.log(isBoiling("104C"), true)
console.log(isBoiling("-10F"), false)
console.log(isBoiling("120F"), false)