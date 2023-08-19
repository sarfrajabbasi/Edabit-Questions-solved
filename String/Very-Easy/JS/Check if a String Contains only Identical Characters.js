function isIdentical(s) {
	var arr = s.split("")
    var output ;
    arr.forEach(e=>{
       output = arr[0]==e
    })
    return output
}

console.log(isIdentical("kkkkk"), true)
console.log(isIdentical("ckkkk"), false)
console.log(isIdentical("kkkkck"), false)
console.log(isIdentical("aabc"), false)
console.log(isIdentical("ccc"), true)
console.log(isIdentical("aabbbb"), false)
console.log(isIdentical("bbbbbb"), true)