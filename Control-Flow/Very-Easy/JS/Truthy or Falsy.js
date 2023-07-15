function isTruthy(input){
    if(input){
        return 1
    }
    return 0
}
function isTruthy(input){
    return Boolean(input) | 0

}
function isTruthy(input){
    return Number(Boolean(input) || false)

}
function isTruthy(input){
    return (input)? 1 :0;

}

console.log(isTruthy(1), 1)
console.log(isTruthy(-1), 1)
console.log(isTruthy("false"), 1)
console.log(isTruthy([]), 1)
console.log(isTruthy(true), 1)
console.log(isTruthy({}), 1)
console.log(isTruthy(function(){}), 1)
console.log(isTruthy(0), 0)
console.log(isTruthy(""), 0)
console.log(isTruthy(null), 0)
console.log(isTruthy(undefined), 0)
console.log(isTruthy(false), 0)
console.log(isTruthy(NaN), 0)
console.log(isTruthy(''), 0)