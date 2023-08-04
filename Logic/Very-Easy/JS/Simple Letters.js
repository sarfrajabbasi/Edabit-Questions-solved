function longestString(str1, str2) {
	var newStr = (str1 + str2).split("");
    newStr.sort();
    var stradd = ""
    var newSet =  new Set(newStr);
    newSet.forEach(x => stradd += x)
    return stradd
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
