function reverse(str) {
	if(str == ""){
        return str
    }
    return reverse(str.substr(1))+str.charAt(0)
}
function reverse(str) {
	return str && reverse(str.substr(1))+str.charAt(0) || str
}

console.log(reverse("hello"), "olleh")
console.log(reverse("world"), "dlrow")
console.log(reverse("a"), "a")
console.log(reverse(""), "", "An empty string should return an empty string.")