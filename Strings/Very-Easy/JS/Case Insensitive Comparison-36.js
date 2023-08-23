function match(s1, s2) {
	let n = s1.toLowerCase().localeCompare(s2.toLowerCase());
    if(n===0)
    return true;
    else
    return false;
}

console.log(match("hello", "hELLo"), true)
console.log(match("hey", "hey"), true)
console.log(match("venom", "VENOM"), true)
console.log(match("maGIciAN", "magician"), true)
console.log(match("stupIFy", "stupifY"), true)

console.log(match("bald", "blad"), false)
console.log(match("motive", "emotive"), false)
console.log(match("mask", "mAskinG"), false)
console.log(match("skim", "skimp"), false)
console.log(match("EXCEl", "exceLs"), false)