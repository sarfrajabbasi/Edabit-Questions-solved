function monthName(num) {
	var obj = {
    1 :"January", 
    2 :"February",
    3 :"March",
    4 :"April",
    5 :"May",
    6 :"June",
    7 :"July",
    8 :"August",
    9 :"September",
   10 : "october",
   11 : "November",
   12 : "December",
    }
    return obj[num]
}

console.log(monthName(1), "January")
console.log(monthName(2), "February")
console.log(monthName(3), "March")
console.log(monthName(4), "April")
console.log(monthName(5), "May")
console.log(monthName(6), "June")
console.log(monthName(7), "July")
console.log(monthName(8), "August")
console.log(monthName(9), "September")
console.log(monthName(10), "October")
console.log(monthName(11), "November")
console.log(monthName(12), "December")