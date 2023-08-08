function hammingDistance(str1, str2) {
	var distance = 0;
    for(let i=0;i<str1.length;i++){
      if(str1[i] != str2[i]){
        distance++
      }  
    } 
    return distance
}

console.log(hammingDistance("abcde", "bcdef"), 5)
console.log(hammingDistance("abcde", "abcde"), 0)
console.log(hammingDistance("strong", "strung"), 1)