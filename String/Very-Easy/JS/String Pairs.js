function stringPairs(str) {
 var strArr = [];
 for(let i=0;i<str.length;i++){
    if(str.length%2==0){
        strArr.push(str[i] + str[i+1])
        i++
    }else if(str.length%2 !=0){
        if(i ==str.length-1){
            strArr.push(str[i] +"*")
        }else{
            strArr.push(str[i]+str[i+1])
            i++
        }
    }
 }
 return strArr
}

console.log(stringPairs("abcdef"), ["ab", "cd", "ef"])
console.log(stringPairs("abcdefg"), ["ab", "cd", "ef", "g*"])
console.log(stringPairs(""), [])
console.log(stringPairs("pak"), ["pa", "k*"])
console.log(stringPairs("mubashir"), ["mu", "ba", "sh", "ir"])
console.log(stringPairs("edabit"), ["ed", "ab", "it"])
console.log(stringPairs("airforces"), ["ai", "rf", "or", "ce", "s*"])