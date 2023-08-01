function calculateYears(humanYears) {
    var arr =  [];
    var catYear =15;
    var dogYear =15;
   if(humanYears>2){
    catYear += 9;
    dogYear += 9;
    humanYears-=2
    catYear += 4*humanYears
    dogYear += 5*humanYears
   }
   arr.push(humanYears,catYear,dogYear);
   return arr
}

console.log(calculateYears(1), [1,15,15])
console.log(calculateYears(2), [2,24,24])
console.log(calculateYears(10), [10,56,64])
console.log(calculateYears(20), [20,96,114])
console.log(calculateYears(65), [65,276,339])
console.log(calculateYears(43), [43,188,229])
console.log(calculateYears(100), [100,416,514])
