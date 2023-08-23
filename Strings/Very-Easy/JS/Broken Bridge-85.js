function isSafeBridge(str){
    let s = str.split("")
    return s.indexOf(' ')===-1
    
}
function isSafeBridge(str){
    return !str.includes(" ")
}
console.log(isSafeBridge("####"), true)
console.log(isSafeBridge("## ####"), false)
console.log(isSafeBridge("#"), true)
console.log(isSafeBridge("# #"), false)