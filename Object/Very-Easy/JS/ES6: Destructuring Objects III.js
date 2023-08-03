const str = `({ one=1, two } = { two : 2 }).toString()`

eval(str)

const validString = (str) => {
  return /\{.*(one).*\=.*1.*(two).*\}.*\=/.test(str) ? "valid" : "not valid" 
}
 
console.log(validString(str), "valid", "You must give the variable one a default value")
console.log(one, 1, "The variable one must equal 1")
console.log(two, 2, "The variable two must equal 2")