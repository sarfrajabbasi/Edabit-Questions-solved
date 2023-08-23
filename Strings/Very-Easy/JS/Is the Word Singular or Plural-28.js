function isPlural(word){
    return (word[word.length-1] ==="s")? true
:false;
}
function isPlural(word){
 return word.endsWith("s");
}
function isPlural(word){
 for(let i =0;i<word.length;i++){
    if(word[word.length-1] ==="s"){
        return true;
    }

 }
 return false;
}

console.log(isPlural("dudes"), true)
console.log(isPlural("flowers"), true)
console.log(isPlural("checks"), true)
console.log(isPlural("varies"), true)
console.log(isPlural("efforts"), true)
console.log(isPlural("mood"), false)
console.log(isPlural("whiteboard"), false)
console.log(isPlural("cow"), false)
console.log(isPlural("word"), false)
console.log(isPlural("love"), false)
console.log(isPlural("silly"), false)