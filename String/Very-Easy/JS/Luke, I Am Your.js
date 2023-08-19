function relationToLuke(name) {
	const Person = {
     "Darth Vader" :  "father",
            "Leia":	  "sister",
            "Han" :   "brother in law",
            "R2D2":   "droid"
    }
    return `Luke, I am your ${Person[name]}`
}

console.log(relationToLuke("Darth Vader"), "Luke, I am your father.")
console.log(relationToLuke("Leia"), "Luke, I am your sister.")
console.log(relationToLuke("Han"), "Luke, I am your brother in law.")
console.log(relationToLuke("R2D2"), "Luke, I am your droid.")