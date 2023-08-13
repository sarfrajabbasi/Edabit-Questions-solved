function intOrString(param) {
	return(typeof param == "string")? "str" :"int"
}

console.log(intOrString(1), "int")
console.log(intOrString("HELLO"), "str")
console.log(intOrString("edabit"), "str")
console.log(intOrString(873432874), "int")
console.log(intOrString(5), "int")