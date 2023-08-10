function otherSides(length) {
    var l = (3**.5)*length
return [Math.ceil(l),+l.toFixed(2)];
}

console.log(otherSides(1), [2, 1.73])
console.log(otherSides(2), [4, 3.46])
console.log(otherSides(3), [6, 5.2])
console.log(otherSides(7), [14, 12.12])