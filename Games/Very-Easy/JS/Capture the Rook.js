function canCapture([yourRook, opponentsRook]) {
    var val = false;
	for(let i=0;i<opponentsRook.length;i++){
      if(yourRook.includes(opponentsRook[i])){
        val = true
      }
    }
    
    return val
}

console.log(canCapture(['A8', 'E8']), true)
console.log(canCapture(['A1', 'B2']), false)
console.log(canCapture(['H4', 'H3']), true)
console.log(canCapture(['F5', 'C8']), false)
console.log(canCapture(['G3', 'G7']), true)
console.log(canCapture(['B3', 'B2']), true)
console.log(canCapture(['F5', 'B2']), false)
console.log(canCapture(['H5', 'C8']), false)