function rotateMaxNumber(num) {
	var str = String(num);
    if(str =="")return str
    return +(rotateMaxNumber(str.substr(1))+str.charAt(0));
}

console.log(rotateMaxNumber(123), 321)
console.log(rotateMaxNumber(1546), 6541)
console.log(rotateMaxNumber("001"), 100)
console.log(rotateMaxNumber(999), 999)
console.log(rotateMaxNumber("12345"), 54321)
console.log(rotateMaxNumber("00009"), 90000)