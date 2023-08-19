function countDs(sentence) {
	return sentence.match(/d/gi).length
}

console.log(countDs("My friend Dylan got distracted at school"), 4)
console.log(countDs("Debris was scattered all over the place."), 2)
console.log(countDs("The rodents hibernated in their den."), 3)
