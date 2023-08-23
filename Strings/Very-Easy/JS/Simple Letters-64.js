function longestString(str1,str2){
    let mixStr = str1 + str2;
    let strArr =  mixStr.split("")
    strArr.sort();
    let newArr =  []
    for(let i =0;i<strArr.length;i++){
        if(strArr[i+1] !==strArr[i]){
            newArr.push(strArr[i]);
        }
    }
return newArr.join("")

}

console.log(longestString("mubashir", "edabit"), "abdehimrstu")
console.log(longestString("pakistan", "airforce"), "acefiknoprst")
console.log(longestString("", "e"), "e")
console.log(longestString("", ""), "")
console.log(longestString("noooo", "yesssss"), "enosy")
console.log(longestString("aretheyhere", "yestheyarehere"), "aehrsty")
console.log(longestString("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longestString("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
console.log(longestString("lordsofthefallen", "gamekult"), "adefghklmnorstu")
