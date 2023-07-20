const user = { name: "John", email: "john@example.com",city: "Phoenix", state: "AZ", country: "USA"}
const str = `({ name, email, ...rest} = user ).toString()`

eval(str)

function validUser() {
	return JSON.stringify(user) === JSON.stringify({ name: "John", email: "john@example.com",city: "Phoenix", state: "AZ", country: "USA"}) ? "valid" : "not valid"
}  

function rightSideValidation() {
	return /\suser\s/.test(str) ? "valid" : "not valid" 
}

console.log(validUser(), "valid", "The user object must not be changed")
console.log(rightSideValidation(), "valid", 'The right side of the assignment should remain as "user"')
console.log(name, "John")
console.log(email, "john@example.com")
console.log(rest, {city: "Phoenix", state: "AZ", country: "USA"}, "The variable rest has not been defined yet.")