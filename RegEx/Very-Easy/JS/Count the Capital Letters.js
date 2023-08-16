function capitalLetters(str) {
	var newstr = str.match(/[A-Z]/g);
    return (newstr != null)? newstr.length : 0;
}

console.log(capitalLetters("hvbHKuFxMORMuBYRsgNF"), 12)
console.log(capitalLetters("nrrvrXlmfwjwlbcjwrzt"), 1)
console.log(capitalLetters("VdefGMkIeTUipnLhnIfe"), 8)
console.log(capitalLetters("ShwvYyeQdGsJYRBhoihI"), 9)
console.log(capitalLetters("ykEblUluPthiCMhxQFlz"), 7)
console.log(capitalLetters("NCdLUzNdihwUumkqfJqN"), 8)
console.log(capitalLetters("sdbMinvzxxulkzyzhfWe"), 2)
console.log(capitalLetters("NEcLjmRMJEXwnBkiPpCO"), 12)
console.log(capitalLetters("KVFifdDbnuWdkDdmDAkO"), 9)
console.log(capitalLetters("pkgUmnquvzIueBlLbtYu"), 5)
console.log(capitalLetters("xbbpykGhycjVEvCdaMew"), 5)
console.log(capitalLetters("YVgbDlgZDDaGkOymseSP"), 10)
console.log(capitalLetters("miuyhtTofqSuoCrgyhtc"), 3)
console.log(capitalLetters("YYoNuXdYJhHIPFZZndya"), 12)
console.log(capitalLetters("LRuGZepMZYIwQWXJpoTB"), 14)
console.log(capitalLetters("gmEosHVTLNEsYOFLCrRR"), 14)
console.log(capitalLetters("dPiadMjurjCjrgYbceuK"), 5)
console.log(capitalLetters("PQgSxLADOswVPWoDBgCD"), 14)
console.log(capitalLetters("odoaxlnmuyixnpthidus"), 0)
console.log(capitalLetters("XcqykqdmvtuMynFhnayf"), 3)