function inchesToFeet(inches) {
	if(inches <12){
        return 0
    }
    return inches /12
}

console.log(inchesToFeet(12), 1) 
console.log(inchesToFeet(360), 30) 
console.log(inchesToFeet(3612), 301)
console.log(inchesToFeet(324), 27)
console.log(inchesToFeet(3012), 251)
console.log(inchesToFeet(11), 0)