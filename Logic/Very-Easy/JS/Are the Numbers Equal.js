function isEqual(num1, num2) {
    return (typeof num1 !== "string"  && typeof num1 !== "string")? num1==num2 : false
}
console.log(isEqual(2, 2), true)
console.log(isEqual("1", 5), false)
console.log(isEqual(88, 88), true)
console.log(isEqual(36, 35), false)
console.log(isEqual("1", 1), false)
console.log(isEqual(1, 1), true)
console.log(isEqual(5, 6), false)
console.log(isEqual("1", "1"), false)