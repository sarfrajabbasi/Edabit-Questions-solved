function calculateYears(humanYears) {
    let catYears =15;
    let dogYears =15;
    if(humanYears == 2){
        catYears +=9;
        dogYears += 9;
    }else if(humanYears >2){
        catYears += 4*humanYears+1;
        dogYears += 5*humanYears-1;
    }
    return [humanYears,catYears,dogYears]
}

console.log(calculateYears(1), [1,15,15])
console.log(calculateYears(2), [2,24,24])
console.log(calculateYears(10), [10,56,64])
console.log(calculateYears(20), [20,96,114])
console.log(calculateYears(65), [65,276,339])
console.log(calculateYears(43), [43,188,229])
console.log(calculateYears(100), [100,416,514])