function keyboardMistakes(str) {
    var arr  = str.split("");
    for(let i=0;i<arr.length;i++){
        if(arr[i]=="0"){
            arr[i] = "O"
        }else if(arr[i] == "1"){
            arr[i] = "I"
        }else if(arr[i] == "4"){
            arr[i] = "A"
        }else if(arr[i]== "5"){
            arr[i] = "S"
        }
    }
    return arr.join("")
}

console.log(keyboardMistakes("MUB45H1R"), "MUBASHIR")
console.log(keyboardMistakes("DUBL1N"), "DUBLIN")
console.log(keyboardMistakes("51NG4P0RE"), "SINGAPORE")
console.log(keyboardMistakes("P4K15T4N"), "PAKISTAN")
console.log(keyboardMistakes("P4R15"), "PARIS")