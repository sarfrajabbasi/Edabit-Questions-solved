function stringPairs(str){
    // if string is empty the return []
   if(str.length===0)return [];
//    create a varibale let called stringPair and set it to an [];
   let strPair = [];

//  iterate through the end of the string
   for(let i=0;i<str.length;i++){
    //  if the length of string is  even then add the char to the neighburing char
    if(str.length%2===0){
        strPair.push(str[i]+str[i +1])
        // increament i by 1 so we don't include the neighburing char in another pair
        i++;
        // if string length is odd and we are at the last char in the string.

        // if the length of string is odd then add the "*"  to the end of the current char
    }else if(str.length%2 !==0){
        if(i===str.length-1){
            strPair.push(str[i] +"*")
        }else{
            strPair.push(str[i]+str[i +1])
            i++

        }
    }
   }
//    return strPair;
   return strPair;
}
console.log(stringPairs("abcdef"), ["ab", "cd", "ef"])
console.log(stringPairs("abcdefg"), ["ab", "cd", "ef", "g*"])
console.log(stringPairs(""), [])
console.log(stringPairs("pak"), ["pa", "k*"])
console.log(stringPairs("mubashir"), ["mu", "ba", "sh", "ir"])
console.log(stringPairs("edabit"), ["ed", "ab", "it"])
console.log(stringPairs("airforces"), ["ai", "rf", "or", "ce", "s*"])
 
