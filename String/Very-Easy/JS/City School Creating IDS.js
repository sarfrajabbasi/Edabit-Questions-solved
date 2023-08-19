function createID(firstname, lastname) {
    
	return `${firstname[0].toLowerCase()}${lastname[0].toUpperCase()}${lastname.slice(1,3).toLowerCase()}`
}
console.log(createID("mary","smith"), "mSmi", "all lower case")
console.log(createID("S","WORKING"), "sWor", "all upper case")
console.log(createID("joHN","wAShington"), "jWas", "mixed case")