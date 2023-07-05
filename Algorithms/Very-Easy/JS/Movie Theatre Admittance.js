function acceptIntoMovie(age, isSupervised) {
	if(age>=15 || isSupervised){
        return true
    }
    return false
}

console.log(acceptIntoMovie(14, true), true)
console.log(acceptIntoMovie(15, true), true)
console.log(acceptIntoMovie(16, true), true)
console.log(acceptIntoMovie(14, false), false)
console.log(acceptIntoMovie(15, false), true)
console.log(acceptIntoMovie(16, false), true)
console.log(acceptIntoMovie(14.99999, true), true)
console.log(acceptIntoMovie(14.99999, false), false)