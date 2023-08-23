function longBurp(num){
    let r = "r"
    if(num>=1){
        
        return `Bu${r.repeat(num)}p`
    }
    return `nooooooooo`
}

console.log(longBurp(3), "Burrrp")
console.log(longBurp(5), "Burrrrrp")
console.log(longBurp(9), "Burrrrrrrrrp")
console.log(longBurp(10), "Burrrrrrrrrrp")
console.log(longBurp(13), "Burrrrrrrrrrrrrp")
console.log(longBurp(18), "Burrrrrrrrrrrrrrrrrrp")
console.log(longBurp(1), "Burp")
console.log(longBurp(0), "nooooooooo")