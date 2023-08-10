function nextSquare(n) {
	var nextS = Math.sqrt(n)
    if(Number.isInteger(nextS)){
       return (nextS+1)**2
    }
    return null
}

console.log(nextSquare(121), 144, "Wrong output for 121")
console.log(nextSquare(625), 676, "Wrong output for 625")
console.log(nextSquare(319225), 320356, "Wrong output for 319225")
console.log(nextSquare(15241383936), 15241630849, "Wrong output for 15241383936")
console.log(nextSquare(155), null, "Wrong output for 155")
console.log(nextSquare(342786627), null, "Wrong output for 342786627")