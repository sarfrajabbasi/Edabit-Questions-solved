function firstAndLast(s) {
	var str1 = s.split("").sort().join("");
    var str2 = str1.split("").reverse().join("")
    return [str1,str2]
}

console.log(firstAndLast("marmite"), ["aeimmrt", "trmmiea"])
console.log(firstAndLast("bench"), ["bcehn", "nhecb"])
console.log(firstAndLast("scoop"), ["coops", "spooc"])
console.log(firstAndLast("fanatic"), ["aacfint", "tnifcaa"])