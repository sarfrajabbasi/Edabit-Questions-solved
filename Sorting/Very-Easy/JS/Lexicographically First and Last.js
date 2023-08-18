function firstAndLast(s) {
	var newStr = s.split("").sort().join("");
	var newStr2 = s.split("").sort().reverse().join("");
    return [newStr,newStr2]
}

console.log(firstAndLast("marmite"), ["aeimmrt", "trmmiea"])
console.log(firstAndLast("bench"), ["bcehn", "nhecb"])
console.log(firstAndLast("scoop"), ["coops", "spooc"])
console.log(firstAndLast("fanatic"), ["aacfint", "tnifcaa"])