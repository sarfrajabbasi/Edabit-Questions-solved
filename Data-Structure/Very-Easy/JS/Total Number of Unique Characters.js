function countUnique(s1, s2) {
	var str = [...s1+s2];
    // sets is unique so it not store duplicate element.
    var sets = new Set(str)
   return sets.size
}

console.log(countUnique("apple", "play"), 5)
console.log(countUnique("sore", "zebra"), 7)
console.log(countUnique("pip", "geeks"), 6)
console.log(countUnique("a", "soup"), 5)
console.log(countUnique("maniac", "maniac"), 5)