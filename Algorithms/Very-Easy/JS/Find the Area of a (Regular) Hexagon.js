function areaOfHexagon(x) {
    if(x<=0){
        return null
    }else{
        var areaOfHex = ((3* Math.sqrt(3))* (x**2) )/2;
    return areaOfHex.toFixed(1);
    }
    
}

console.log(areaOfHexagon(1), 2.6)
console.log(areaOfHexagon(2), 10.4)
console.log(areaOfHexagon(3), 23.4)
console.log(areaOfHexagon(4), 41.6)
console.log(areaOfHexagon(5), 65)
console.log(areaOfHexagon(0), null)
console.log(areaOfHexagon(-1), null)