function greaterThanOne(frac) {
	return eval(frac)>1
}

console.log(greaterThanOne("1/2"), false)
console.log(greaterThanOne("7/4"), true)
console.log(greaterThanOne("10/10"), false)
console.log(greaterThanOne("12/30"), false)
console.log(greaterThanOne("28/3"), true)
console.log(greaterThanOne("35/31"), true)
console.log(greaterThanOne("11/27"), false)
console.log(greaterThanOne("42/32"), true)
console.log(greaterThanOne("34/15"), true)
console.log(greaterThanOne("16/16"), false)
console.log(greaterThanOne("38/41"), false)
console.log(greaterThanOne("45/43"), true)
console.log(greaterThanOne("13/38"), false)
console.log(greaterThanOne("43/2"), true)
console.log(greaterThanOne("16/31"), false)
console.log(greaterThanOne("41/15"), true)
console.log(greaterThanOne("2/38"), false)
console.log(greaterThanOne("37/21"), true)