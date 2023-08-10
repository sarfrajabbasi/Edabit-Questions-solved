function smashFactor(bs, cs) {
	// calculating smash factor is ball speed divided by club speed.
    return +(bs/cs).toFixed(2)
}

console.log(smashFactor(139.4, 93.8), 1.49)
console.log(smashFactor(181.2, 124.5), 1.46)
console.log(smashFactor(154.7, 104.3), 1.48)