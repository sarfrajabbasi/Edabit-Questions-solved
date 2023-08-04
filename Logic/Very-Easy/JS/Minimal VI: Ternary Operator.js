
function areTrue(a, b) {
	return a && b ? "both" : a ? "first " : b? "second" : "neither";
}

console.log(areTrue(true, true), "both")
console.log(areTrue(true, false), "first")
console.log(areTrue(false, true), "second")
console.log(areTrue(false, false), "neither")