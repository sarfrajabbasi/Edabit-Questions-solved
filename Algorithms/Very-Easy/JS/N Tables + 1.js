function nTablesPlusOne(n) {
	var str = [];
    for(let i=1;i<=10;i++){
       str.push(n* i+1)
    }
    return str.toString()
}

console.log(nTablesPlusOne(1), "2,3,4,5,6,7,8,9,10,11")
console.log(nTablesPlusOne(7), "8,15,22,29,36,43,50,57,64,71")
console.log(nTablesPlusOne(134), "135,269,403,537,671,805,939,1073,1207,1341")