function boolToString(flag){
 if(typeof(flag) ==="boolean"){
    return flag +""
 }
 return alert("not a boolean")
}
console.log(boolToString(true), "true")
console.log(boolToString(false), "false")
console.log(boolToString(45))