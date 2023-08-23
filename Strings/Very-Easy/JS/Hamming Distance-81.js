function hammingDistance(word,matchingWord){ 
let count = 0;
let i = 0;

if (word.length === matchingWord.length) {
  while (i <= word.length) {
    if (word.toLowerCase()[i] !== matchingWord.toLowerCase()[i]) {
      count++;
    }
    i++;
  }

  return count;
}
return "unequal word lengths";
}
console.log(hammingDistance("abcde", "bcdef"), 5)
console.log(hammingDistance("abcde", "abcde"), 0)
console.log(hammingDistance("strong", "strung"), 1)