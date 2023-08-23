function intOrString(param) {
	return (typeof(param)==="string")? "str" : "int";
}
function intOrString(param) {
	if(typeof(param) === "string"){
        return "str";
    }else{
        return "int"
    }
}

console.log(intOrString(1), "int")
console.log(intOrString("HELLO"), "str")
console.log(intOrString("edabit"), "str")
console.log(intOrString(873432874), "int")
console.log(intOrString(5), "int")