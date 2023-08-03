let str = `({ one, two,anotherOne } = { one : 1, two : 2,anotherOne :1}).toString()`

eval(str)

const validString = (str) => {
  return /\{.*(one).*:.*anotherOne.*(two).*\}.*\=/.test(str) ? "valid" : "not valid" 
}
 
console.log(validString(str), "valid", "You must assign the variable anotherOne with object destructuring")
console.log(anotherOne, 1, "The variable anotherOne must equal 1")
console.log(two, 2, "The variable two must equal 2")