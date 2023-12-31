const REGEXP = /\w/g
const str = "**^&$Regular#$%Expressions$%$$%^**"

const validate = (REGEXP) => {
	 if(!/\\w/.test(String(REGEXP))) return () => "required"
	 return function testReg(str) {
		 return str.match(REGEXP).join("")
	 }
}

const testExp = validate(REGEXP)
console.log(testExp(str))

console.log(testExp(str), "required", "You are required to use a \w character class in your expression.")
console.log(testExp(str), "RegularExpressions")