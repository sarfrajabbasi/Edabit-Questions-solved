function programmers(one, two, three) {
    var mx = Math.max(one,two,three);
    var mn = Math.min(one,two,three);
	return mx-mn
};

console.log(programmers(1,   5,   9),   8)
console.log(programmers(43,  33,  43),  10)
console.log(programmers(88,  14,  23),  74)
console.log(programmers(33,  72,  74),  41)
console.log(programmers(147, 33,  526), 493)
console.log(programmers(234, 345, 457), 223)