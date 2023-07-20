function acceptedWords(arr) {
	return arr.filter(x => !(/C/g).test(x))
}

console.log(acceptedWords(["Cans", "Worms", "Bugs", "Cold", "Beans"]), ["Worms", "Bugs", "Beans"])
console.log(acceptedWords(["Ducks", "Bears",  "Cats"]), ["Ducks", "Bears"])
console.log(acceptedWords(["cars", "trucks", "planes"]), ["cars", "trucks", "planes"])