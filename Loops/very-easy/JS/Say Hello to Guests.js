function greetPeople(names) {
	var hello = [];
    if(names.length == 0){
        return ""
    }
    for(let i=0;i<names.length;i++){
        hello.push("Hello "+ names[i]);
    }
    return hello.join(",")
}

console.log(greetPeople(["Kyrill"]),  "Hello Kyrill")
console.log(greetPeople(["Kyrill", "Mom", "Dad", "Zuzu"]), "Hello Kyrill, Hello Mom, Hello Dad, Hello Zuzu")
console.log(greetPeople([]), "")