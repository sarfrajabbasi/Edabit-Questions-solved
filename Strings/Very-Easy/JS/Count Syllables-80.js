function numberSyllables(word) {
	let words =word.split("-");
    return words.length;
    
}
console.log(numberSyllables("buf-fet"), 2)
console.log(numberSyllables("beau-ti-ful"), 3)
console.log(numberSyllables("mon-u-men-tal"), 4)
console.log(numberSyllables("on-o-mat-o-poe-ia"), 6)
console.log(numberSyllables("o-ver-ly"), 3)
console.log(numberSyllables("pas-try"), 2)
console.log(numberSyllables("flu-id"), 2)
console.log(numberSyllables("syl-la-ble"), 3)