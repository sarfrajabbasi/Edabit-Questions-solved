function add(char, str) {
	return str.split(" ").join(char)
}
function add(char,str){
    return str.replaceAll(" ",char)
}

console.log(add("#", "hello world"), "hello#world")
console.log(add("R", "javascript is fun"), "javascriptRisRfun")
console.log(add("*", "use .join() for this challenge"), "use*.join()*for*this*challenge")
console.log(add("#", " "), "#")