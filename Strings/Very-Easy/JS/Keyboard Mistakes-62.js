// function keyboardMistakes(str){
//     return str.replace("4","A").replace("5","S").replace("0","O").replace("1","I").replace("4","A");
// }
function keyboardMistakes(str){
    let split = []
   let splitStr = str.split("");
   for(let i=0;i<splitStr.length;i++){
    if(splitStr[i]==="4"){
        splitStr[i]="A";
    }else if(splitStr[i]==="5"){
        splitStr[i] ="S"
    }else if(splitStr[i]==="0"){
        splitStr[i] ="O"
    }else if(splitStr[i]==="1"){
        splitStr[i] ="I"
    }
     split.push(splitStr[i])
   }
   return split.join("");
}
console.log(keyboardMistakes("MUB45H1R"), "MUBASHIR")
console.log(keyboardMistakes("DUBL1N"), "DUBLIN")
console.log(keyboardMistakes("51NG4P0RE"), "SINGAPORE")
console.log(keyboardMistakes("P4K15T4N"), "PAKISTAN")
console.log(keyboardMistakes("P4R15"), "PARIS")