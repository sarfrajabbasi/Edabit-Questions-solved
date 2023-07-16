function integerBoolean(n) {
	var newArr = [];
    for(let i=0;i<n.length;i++){
        if(+n[i]){
            newArr.push(true)
        }else{
            newArr.push(false)
        }
    }
} 
   
function integerBoolean(n) {
	var newArr = [];
    for(let i=0;i<n.length;i++){
        (+n[i])? newArr.push(true):newArr.push(false);
    }
    return newArr
}

function integerBoolean(n) {
	var newArr = [];
    for(let i=0;i<n.length;i++){
       newArr.push(Boolean(+n[i]) && true)
    }
    return newArr
}
function integerBoolean(n) {
	var newArr = [];
    for(let i=0;i<n.length;i++){
       newArr.push(Boolean(+n[i]))
    }
    return newArr
}

console.log(integerBoolean("100101"), [true, false, false, true, false, true])
console.log(integerBoolean("10"), [true, false])
console.log(integerBoolean("001"), [false, false, true])
console.log(integerBoolean(""), [])
console.log(integerBoolean("111"), [true, true, true])
console.log(integerBoolean("000"), [false, false, false])
console.log(integerBoolean("10010110"), [true, false, false, true, false, true, true, false])