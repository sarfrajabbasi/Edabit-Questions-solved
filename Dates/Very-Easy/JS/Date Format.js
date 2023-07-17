function formatDate(date) {
	var dt= date.split("/");
    dt.reverse()
    return dt.join("")
}

console.log(formatDate("11/12/2019"),"20191211")
console.log(formatDate("12/31/2019"), "20193112")
console.log(formatDate("01/15/2019"), "20191501")