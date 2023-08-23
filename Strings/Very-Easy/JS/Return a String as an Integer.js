function stringInt(str){
    let strInt = +str;
//    let stringInt = parseInt(str,10)
//    let stringInt2 = parseFloat(str)
//    let stringInt3 = Number(str)
return strInt;
// return stringInt;
   //    return stringInt2;
   //    return stringInt3;
}
console.log(stringInt("6"), 6)
console.log(stringInt("2"), 2)
console.log(stringInt("10"), 10)
console.log(stringInt("666"), 666)