let str = `( {one,two} = { one : 1, two : 2}).toString()`

eval(str)

const validString = (str) => {
  return /\{.*(one).*(two).*\}.*\=/.test(str) ? "valid" : "not valid" 
}
 
console.log(validString(str), "valid", "You must use the object destructuring to assign variables one and two")
console.log(one, 1, "The variable one must equal 1")
console.log(two, 2, "The variable two must equal 2")