function isEmpty(s) {
	if(s.length ===0){
        return true
    }
    return false;
}
console.log(isEmpty(""), true)
console.log(isEmpty(" "), false)
console.log(isEmpty("            "), false)
console.log(isEmpty("38215"), false)
console.log(isEmpty("afjabsdf"), false)
console.log(isEmpty("!?@&"), false)