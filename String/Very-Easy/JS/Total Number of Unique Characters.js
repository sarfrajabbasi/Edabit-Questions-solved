function countUnique(s1, s2) {
	return new Set(s1+s2).size
}
function countUnique(s1, s2) {
	return String.prototype.concat.call(...new Set(s1+s2)).length
}

console.log(countUnique("apple", "play"), 5)
console.log(countUnique("sore", "zebra"), 7)
console.log(countUnique("pip", "geeks"), 6)
console.log(countUnique("a", "soup"), 5)
console.log(countUnique("maniac", "maniac"), 5)