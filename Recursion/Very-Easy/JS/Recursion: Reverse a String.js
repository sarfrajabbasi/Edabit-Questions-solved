function reverse(str) {
	if(str ==""){
        return ""
    }
    return reverse(str.substr(1))
}

console.log(reverse("hello"), "olleh")
console.log(reverse("world"), "dlrow")
console.log(reverse("a"), "a")
console.log(reverse(""), "", "An empty string should return an empty string.")