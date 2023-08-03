function determineLever(arr) {
	return (arr[1]=="f")? "Frist class lever" :(arr[2]=="f")? "second class lever" : "third class lever";
}

console.log(determineLever(["e", "f", "l"]), "first class lever")
console.log(determineLever(["e", "l", "f"]), "second class lever")
console.log(determineLever(["f", "e", "l"]), "third class lever")
