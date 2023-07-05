function leapYear(year) {
	return year %4 ==0
}

console.log(leapYear(2004), true)
console.log(leapYear(8), true)
console.log(leapYear(4), true)
console.log(leapYear(2019), false)
console.log(leapYear(1970), false)
console.log(leapYear(2021), false)
console.log(leapYear(1934), false)
console.log(leapYear(1874), false)
console.log(leapYear(1968), true)
console.log(leapYear(1800), true)