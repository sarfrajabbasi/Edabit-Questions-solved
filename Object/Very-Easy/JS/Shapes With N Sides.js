function nSidedShape(n) {
  let obj = { 
   1 : "circle",
   2 : "semi-circle",
   3 : "triangle",
   4 : "square",
   5 : "pentagon",
   6 : "hexagon",
   7 : "heptagon",
   8 : "octagon",
   9 : "nonagon",
   10 : "decagon",}
   return obj[n]
}

console.log(nSidedShape(1), "circle")
console.log(nSidedShape(2), "semi-circle")
console.log(nSidedShape(3), "triangle")
console.log(nSidedShape(4), "square")
console.log(nSidedShape(5), "pentagon")
console.log(nSidedShape(6), "hexagon")
console.log(nSidedShape(7), "heptagon")
console.log(nSidedShape(8), "octagon")
console.log(nSidedShape(9), "nonagon")
console.log(nSidedShape(10), "decagon")