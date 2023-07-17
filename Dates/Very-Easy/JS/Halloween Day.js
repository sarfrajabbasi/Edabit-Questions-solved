function halloween(dt) {
	return (dt.getDate()==31 && dt.getMonth() ==9 )? "Bonfire toffee" : "toffee"
}

console.log(halloween(new Date("2013/10/31")), "Bonfire toffee")
console.log(halloween(new Date("2012/07/31")), "toffee")
console.log(halloween(new Date("2015/10/31")), "Bonfire toffee")
console.log(halloween(new Date("2011/10/12")), "toffee")
console.log(halloween(new Date("2008/10/11")), "toffee")