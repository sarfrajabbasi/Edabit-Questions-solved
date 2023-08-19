function toInt(str) {
	return Number(str)
}

function toStr(int) {
	return String(int)
}

console.log(toInt("37"), 37)
console.log(toInt("113"), 113)
console.log(toInt("5"), 5)
console.log(toInt("5231"), 5231)
console.log(toStr(37), "37")
console.log(toStr(113), "113")
console.log(toStr(5), "5")
console.log(toStr(5231), "5231")