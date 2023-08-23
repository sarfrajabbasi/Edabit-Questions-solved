function removeFirstLast(str){
    let s = ""
   if(str.length>3) {
        for(let i=1;i<str.length-1;i++){
        s += str[i]
    }}else{
        return str
    }
    return s  
}
function removeFirstLast(str){
    if(str.length >3){
        return str.substring(1,str.length-1)
    }
    return str
}
function removeFirstLast(str){
    return (str.length>3)? str.slice(1,str.length-1):str
}
function removeFirstLast(str){
    return (str.length>3)? str.substring(1,str.length-1):str
}
console.log(removeFirstLast("hello"), "ell")
console.log(removeFirstLast("benefit"), "enefi")
console.log(removeFirstLast("wordy"), "ord")
console.log(removeFirstLast("maybe"), "ayb")
console.log(removeFirstLast("to"), "to")
console.log(removeFirstLast("a"), "a")
console.log(removeFirstLast(""), "")