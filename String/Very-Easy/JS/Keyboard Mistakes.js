function keyboardMistakes(str){
    var arr = str.split("");
    var newStr = "";
    for(let i=0;i<arr.length;i++){

            arr[i] = arr[i].replace(/1/g,"I")
            arr[i] = arr[i].replace(/4/g,"A")
            arr[i] = arr[i].replace(/0/g,"O")
            arr[i] = arr[i].replace(/5/g,"S")
        newStr +=arr[i] 
    }
    return newStr
}
console.log(keyboardMistakes("MUB45H1R"), "MUBASHIR")
console.log(keyboardMistakes("DUBL1N"), "DUBLIN")
console.log(keyboardMistakes("51NG4P0RE"), "SINGAPORE")
console.log(keyboardMistakes("P4K15T4N"), "PAKISTAN")
console.log(keyboardMistakes("P4R15"), "PARIS")