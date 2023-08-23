function height(side){
    let bo = 1/2*Math.sqrt(3)*side;
    // console.log(bo);
    let bo2 = bo * 10;
    return bo2.toFixed(1) + ' mm'
}
console.log(height(2), "17.3 mm")
console.log(height(5), "43.3 mm")
console.log(height(6.2), "53.7 mm")
console.log(height(8.7), "75.3 mm")
console.log(height(10), "86.6 mm")
console.log(height(13), "112.6 mm")
console.log(height(18.5), "160.2 mm")
