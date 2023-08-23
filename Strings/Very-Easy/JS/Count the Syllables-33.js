function countSyllables(str){
   let countSylb  = str.toLowerCase();

   return countSylb.length/2
   

}

console.log(countSyllables("Hehehehehehe"), 6)
console.log(countSyllables("bobobobobobobobo"), 8)
console.log(countSyllables("NANANANA"), 4)
console.log(countSyllables("lelelele"), 4)
console.log(countSyllables("momomomomomomomomo"), 9)
console.log(countSyllables("WiWiWiWiWiWiWiWiWiWi"), 10)
console.log(countSyllables("RURURURURURUrurururuRURU"), 12)
console.log(countSyllables("go"), 1)
console.log(countSyllables("dede"), 2)