function hammingDistance(str1, str2) {
	var count = 0;
    if(str2.length == str2.length){

        for(let i=0;i<str1.length;i++){
            (str1[i]!==str2[i])? count++ :null
        }
    }
    return count
}
console.log(hammingDistance("abcde", "bcdef"), 5)
console.log(hammingDistance("abcde", "abcde"), 0)
console.log(hammingDistance("strong", "strung"), 1)
