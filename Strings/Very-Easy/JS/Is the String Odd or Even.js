function oddOrEven(s){
    if(s.length%2===0){
        return true;
    }
    return false;
}
console.log(oddOrEven("apples"), true)
console.log(oddOrEven("banana"), true)
console.log(oddOrEven("cherry"), true)
console.log(oddOrEven("mango"), false)
console.log(oddOrEven("peach"), false)
console.log(oddOrEven("pears"), false)