function leapYear(year) {
	return (year%4 ==0)
}

console.log(leapYear(1850), false)
console.log(leapYear(1565), false)
console.log(leapYear(1920), true)
console.log(leapYear(1924), true)
console.log(leapYear(1928), true)
console.log(leapYear(1940), true)
console.log(leapYear(2021), false)