function middleEarth(arr) {
	return Math.abs(arr.indexOf("Sam") - arr.indexOf("Frodo"))==1

}

console.log(middleEarth(['Frodo', 'Sam', 'Gandalf']), true)
console.log(middleEarth(['Orc', 'Sam', 'Gandalf', 'Frodo']), false)
console.log(middleEarth(['Sam', 'Frodo', 'Saruman']), true)
console.log(middleEarth(['Orc', 'Frodo', 'Legolas', 'Sam', 'Bilbo']), false)
console.log(middleEarth(['Aragorn', 'Gandalf', 'Sam', 'Frodo', 'Gollum']), true)
console.log(middleEarth(['Arwen', 'Sam', 'Gandalf', 'Frodo', 'Boromir']), false)
console.log(middleEarth(['Faramir', 'Frodo', 'Sam', 'Galadriel']), true)
console.log(middleEarth(['Eowin', 'Gimli', 'Bilbo', 'Frodo', 'Sam', 'Sauron']), true)
console.log(middleEarth(['Gandalf', 'Sam', 'Bilbo', 'Legolas', 'Frodo']), false)
console.log(middleEarth(['Legolas', 'Eowyn', 'Gandalf', 'Sam', 'Frodo', 'Gimli']), true)