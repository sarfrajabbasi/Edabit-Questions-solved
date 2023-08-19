function greetPeople(names) {
	var newArr = [];
    names.forEach(e=>{
        newArr.push("Hello "  + e)
    })
    return newArr.join(" ")
}


console.log(greetPeople(["Kyrill"]),  "Hello Kyrill")
console.log(greetPeople(["Kyrill", "Mom", "Dad", "Zuzu"]), "Hello Kyrill, Hello Mom, Hello Dad, Hello Zuzu")
console.log(greetPeople([]), "")