function stutter(word){
    const stutterWord = word.slice(0,2) + "... ";
    return stutterWord.repeat(2) +word +'?';
}
function stutter(word){
    let stutterF = ""
    for(let i =0;i<=1;i++){
        stutterF += word[i] 
    }
    return stutterF +"... " +  stutterF +"... " + word+"?";
}
console.log(stutter("incredible"), "in... in... incredible?")
console.log(stutter("am"), "am... am... am?")
console.log(stutter("outstanding"), "ou... ou... outstanding?")