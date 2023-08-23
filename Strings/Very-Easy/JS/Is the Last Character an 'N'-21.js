function isLastCharacterN(word){
    return word.endsWith("n");

}
function isLastCharacterN(word){
   
   return word.charAt(word.length-1) ==="n";
     
}
function isLastCharacterN(word){
      for(let s of word){
        if(s==="n"){
            return true;
        }
      }
      return false;
}

console.log(isLastCharacterN("Aiden"), true)
console.log(isLastCharacterN("Roxy"), false)
console.log(isLastCharacterN("Bert"), false)
console.log(isLastCharacterN("Dean"), true)
console.log(isLastCharacterN("Ian"), true)
console.log(isLastCharacterN("Brian"), true)
console.log(isLastCharacterN("Daniel"), false)