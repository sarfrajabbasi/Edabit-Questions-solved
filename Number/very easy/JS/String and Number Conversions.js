function intToString(num) {
	return String(num)
}


function stringToInt(num) {
	return +(num)
}

let flag = true;
function toggleFlag() {
	flag = false;
}
oldToString = 

Object.prototype.toString;
Number.prototype.toString = function() {
	toggleFlag();
	return "" + this
}
oldParseInt = parseInt;
parseInt = function() {
	toggleFlag();
	return oldParseInt(...arguments);
}
oldParseFloat = parseFloat;
parseFloat = function() {
	toggleFlag();
	return oldParseFloat(...arguments);
}

console.log(intToString(4), '4')
console.log(intToString(65), '65')
console.log(intToString(29348), '29348')
console.log(intToString(49583908545), '49583908545')

console.log(stringToInt('4'), 4)
console.log(stringToInt('65'), 65)
console.log(stringToInt('29348'), 29348)
console.log(stringToInt('49583908545'), 49583908545)

console.log(flag ? "Bonus points!" : "You recieve no bonus points.")