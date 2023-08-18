function longestString(str1, str2) {
	var newStr = new Set(str1+str2);
    var arr =[]
    newStr.forEach(x =>arr.push(x))
    return arr.sort().join("")
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