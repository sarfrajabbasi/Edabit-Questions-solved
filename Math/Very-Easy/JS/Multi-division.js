function abcmath(a, b, c) {
    for(let i=1;i<=b;i++){
        a += a
    }
return a%c==0
}

console.log(abcmath(1, 2, 3), false)
console.log(abcmath(69, 15, 9), false)
console.log(abcmath(9, 2, 52), false)
console.log(abcmath(5, 2, 3), false)
console.log(abcmath(5, 2, 1), true)
console.log(abcmath(261, 2, 1), true)
console.log(abcmath(22, 2, 22), true)
console.log(abcmath(69, 12, 3), true)