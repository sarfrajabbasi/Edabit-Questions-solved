function createID(firstname, lastname) {
	return firstname.toLowerCase().slice(0,1)+lastname.slice(0,1).toUpperCase()+lastname.slice(1,3).toLowerCase();
}

console.log(createID("mary","smith"), "mSmi", "all lower case")
console.log(createID("S","WORKING"), "sWor", "all upper case")
console.log(createID("joHN","wAShington"), "jWas", "mixed case")