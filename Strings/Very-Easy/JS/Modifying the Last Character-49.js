function modifyLast(str,n){
    let lastVAlue = str.charAt(str.length-1);
    let modfiyed = str.padEnd(str.length-1+n,lastVAlue);
    return modfiyed;
}
console.log(modifyLast("Hello", 3), "Hellooo")
console.log(modifyLast("hey", 6), "heyyyyyy")
console.log(modifyLast("plsssss!1!", 5), "plsssss!1!!!!!")
console.log(modifyLast("gr", 2), "grr")
console.log(modifyLast("excuse me what?", 5), "excuse me what?????")
console.log(modifyLast("123", 5), "1233333")
console.log(modifyLast("a", 3), "aaa")
console.log(modifyLast("STOP", 3), "STOPPP")